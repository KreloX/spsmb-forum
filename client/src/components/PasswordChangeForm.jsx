import { useForm } from 'react-hook-form'
import { confirmIcon, keyIcon } from '../constants'
import IconInput from './IconInput'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '../features/authActions'

export default ({ token }) => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [msg, setMsg] = useState()
    const navigate = useNavigate()

    const submitForm = (formData) => {
        dispatch(resetPassword({ ...{ token: token }, ...formData })).then(
            (result) => {
                setMsg(result.payload.msg)
                if (result.payload.status == 200) navigate('/auth/sign-in')
            }
        )
    }

    return (
        <form
            className="mx-auto mt-8 grid w-full max-w-sm gap-y-5"
            onSubmit={handleSubmit(submitForm)}
        >
            <IconInput
                d={keyIcon}
                id="password"
                autoFocus={true}
                placeholder="Password"
                register={{ ...register('password') }}
            />
            <IconInput
                d={confirmIcon}
                id="password"
                placeholder="Confirm password"
                register={{ ...register('confirmPassword') }}
            >
                <b className="text-pretty text-sm text-red-500">{msg}</b>
            </IconInput>
            <button
                type="submit"
                className="mx-auto mt-3 flex w-3/5 justify-center"
            >
                <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                    Reset
                </b>
            </button>
        </form>
    )
}
