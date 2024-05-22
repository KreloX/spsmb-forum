import A from './A'
import IconInput from './IconInput'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { keyIcon, userIcon } from '../constants'

export default () => {
    const { success } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitForm = (formData) => {
        dispatch(loginUser(formData))
    }

    useEffect(() => {
        if (success) {
            navigate('/')
        }
    }, [success, navigate])

    return (
        <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
            <IconInput
                d={userIcon}
                id="username"
                autoComplete="username"
                placeholder="Username"
                register={{ ...register('username') }}
            />
            <IconInput
                d={keyIcon}
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                register={{ ...register('password') }}
            >
                <div className="flex justify-end">
                    <A
                        href="#"
                        className="text-sm font-semibold text-primary-500 hover:text-primary-300 dark:text-primary-100 dark:hover:text-primary-400"
                    >
                        Forgot password?
                    </A>
                </div>
            </IconInput>
            <button type="submit" className="m-auto flex w-3/5 justify-center">
                <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                    Sign in
                </b>
            </button>
        </form>
    )
}
