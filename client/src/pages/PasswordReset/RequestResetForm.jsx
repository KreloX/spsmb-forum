import { useForm } from 'react-hook-form'
import { userIcon } from '../../constants'
import IconInput from '../../components/IconInput'
import { useDispatch } from 'react-redux'
import { requestReset } from '../../features/authActions'
import { useState } from 'react'

export default () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [msg, setMsg] = useState()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitForm = (formData) => {
        setLoading(true)
        dispatch(
            requestReset({
                ...{
                    domain: `${window.location.protocol}//${window.location.host}`,
                },
                ...formData,
            })
        ).then((result) => {
            setMsg(result.payload.msg)
            setSuccess(result.payload.status == 200)
            setLoading(success)
        })
    }

    return (
        <>
            {success ? (
                <b className="mx-8 mt-4 text-pretty">
                    The reset link was sent to your email inbox. It will expire
                    in 10 minutes.
                </b>
            ) : (
                <>
                    <b className="mx-8 mt-4 text-pretty">
                        A link to change your password will be sent to your
                        email inbox.
                    </b>
                    <form
                        className="mx-auto mt-8 grid w-full max-w-sm gap-y-5"
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <IconInput
                            d={userIcon}
                            id="username"
                            autoComplete="username"
                            autoFocus={true}
                            placeholder="Username"
                            register={{ ...register('username') }}
                        >
                            <b className="text-pretty text-sm text-red-500">
                                {msg}
                            </b>
                        </IconInput>
                        <button
                            type={loading ? 'button' : 'submit'}
                            className="mx-auto mt-3 flex w-3/5 justify-center"
                        >
                            <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                                Send
                            </b>
                        </button>
                    </form>
                </>
            )}
        </>
    )
}
