import IconInput from './IconInput'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { keyIcon, userIcon } from '../constants'
import CustomLink from './CustomLink'

export default () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitForm = (formData) => {
        dispatch(loginUser(formData)).then((result) => {
            if (result.payload.status == 200) navigate('/')
        })
    }

    return (
        <>
            <section className="flex text-lg font-semibold">
                <Link className="flex-1 cursor-default rounded-br-xl rounded-tl-xl px-3 py-6 text-center">
                    Sign In
                </Link>
                <Link
                    className="flex-1 rounded-bl-xl rounded-tr-xl bg-primary-500 px-3 py-6 text-center text-light-100 hover:bg-primary-400 dark:text-light"
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
                                className="text-sm font-semibold text-primary-500 hover:text-primary-300 dark:text-primary-100 dark:hover:text-primary-400"
                            >
                                Forgot password?
                            </CustomLink>
                        </div>
                    </IconInput>
                    <button
                        type="submit"
                        className="mx-auto flex w-3/5 justify-center"
                    >
                        <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                            Sign in
                        </b>
                    </button>
                </form>
            </section>
        </>
    )
}
