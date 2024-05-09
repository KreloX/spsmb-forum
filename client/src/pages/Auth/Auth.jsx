import { useState } from 'react'
import SignInForm from '../../components/SignInForm'
import RegisterForm from '../../components/RegisterForm'
import { twMerge } from 'tailwind-merge'

export default () => {
    const [isRegisterScreen, setIsRegisterScreen] = useState(false)
    return (
        <div className="dark:bg-mixed-800 bg-light-100 mx-auto flex max-w-lg flex-col rounded-xl">
            <div className="flex text-lg font-semibold">
                <button
                    className={twMerge(
                        'bg-primary-500 flex-1 rounded-br-xl rounded-tl-xl px-3 py-6',
                        isRegisterScreen
                            ? ' hover:bg-primary-400 text-light-100 dark:text-light'
                            : ' cursor-default bg-transparent'
                    )}
                    onClick={() => setIsRegisterScreen(false)}
                >
                    Sign In
                </button>
                <button
                    className={twMerge(
                        'bg-primary-500 flex-1 rounded-bl-xl rounded-tr-xl px-3',
                        isRegisterScreen
                            ? ' cursor-default bg-transparent'
                            : ' hover:bg-primary-400 text-light-100 dark:text-light'
                    )}
                    onClick={() => setIsRegisterScreen(true)}
                >
                    Register
                </button>
            </div>
            <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
                <h1 className="text-center tracking-tight">
                    {isRegisterScreen
                        ? 'Register a new account'
                        : 'Sign in to your account'}
                </h1>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    {isRegisterScreen ? <RegisterForm /> : <SignInForm />}
                </div>
            </div>
        </div>
    )
}
