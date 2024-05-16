import A from './A'
import IconInput from './IconInput'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                id="username"
                autoComplete="username"
                placeholder="Username"
                register={{ ...register('username') }}
            />
            <IconInput
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
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
