import IconInput from '../../components/IconInput'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { confirmIcon, keyIcon, mailIcon, userIcon } from '../../constants'
import Wrapper from '../../components/Wrapper'

export default () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitForm = (formData) => {
        dispatch(registerUser(formData)).then((result) => {
            if (result.payload.status == 201) navigate('/')
        })
    }

    return (
        <Wrapper>
            <div className="flex text-lg font-semibold">
                <Link
                    className="flex-1 rounded-br-xl rounded-tl-xl bg-primary-500 px-3 py-6 text-center text-light-100 hover:bg-primary-400 dark:text-light"
                    to="/auth/sign-in"
                >
                    Sign In
                </Link>
                <Link className="flex-1 cursor-default rounded-bl-xl rounded-tr-xl px-3 py-6 text-center">
                    Register
                </Link>
            </div>
            <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <h1 className="text-center tracking-tight">
                    Register a new account
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
                        d={mailIcon}
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        register={{ ...register('email') }}
                    />
                    <IconInput
                        d={keyIcon}
                        id="password"
                        placeholder="Password"
                        register={{ ...register('password') }}
                    />
                    <IconInput
                        d={confirmIcon}
                        id="password"
                        placeholder="Confirm password"
                        register={{ ...register('confirmPassword') }}
                    />
                    <button
                        type="submit"
                        className="mx-auto mt-3 flex w-3/5 justify-center"
                    >
                        <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                            Register
                        </b>
                    </button>
                </form>
            </div>
        </Wrapper>
    )
}
