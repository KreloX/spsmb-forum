import IconInput from './IconInput'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { keyIcon, userIcon } from '../constants'
import CustomLink from './CustomLink'

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
        <>
            <section className="flex text-lg font-semibold">
                <Link className="flex-1 cursor-default rounded-br-xl rounded-tl-xl px-3 py-6 text-center">
                    Sign In
                </Link>
                <Link
                    className="bg-primary-500 hover:bg-primary-400 text-light-100 dark:text-light flex-1 rounded-bl-xl rounded-tr-xl px-3 py-6 text-center"
                    to="/auth/register"
                >
                    Register
                </Link>
            </section>
            <section className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <h1 className="text-center tracking-tight">
                    Sign in to your account
                </h1>
                <form
                    className="mt-8 grid gap-y-5 sm:mx-auto sm:w-full sm:max-w-sm"
                    onSubmit={handleSubmit(submitForm)}
                >
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
                            <CustomLink
                                to="/auth/reset-password"
                                className="text-primary-500 hover:text-primary-300 dark:text-primary-100 dark:hover:text-primary-400 text-sm font-semibold"
                            >
                                Forgot password?
                            </CustomLink>
                        </div>
                    </IconInput>
                    <button
                        type="submit"
                        className="mx-auto flex w-3/5 justify-center"
                    >
                        <b className="bg-primary-500 text-light-100 hover:bg-primary-400 focus-visible:outline-primary-600 dark:text-light w-full rounded-xl px-3 py-2 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95">
                            Sign in
                        </b>
                    </button>
                </form>
            </section>
        </>
    )
}
