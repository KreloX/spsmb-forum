import { useForm } from 'react-hook-form'
import { userIcon } from '../constants'
import IconInput from './IconInput'

export default () => {
    const { register, handleSubmit } = useForm()

    const submitForm = (formData) => {}

    return (
        <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
            <h1 className="text-center tracking-tight">Reset your password</h1>
            <b className="mt-4 text-pretty">
                A link will be sent to your email inbox with a link to change
                your password.
            </b>
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
                <button
                    type="submit"
                    className="mx-auto mt-3 flex w-3/5 justify-center"
                >
                    <b className="bg-primary-500 text-light-100 hover:bg-primary-400 focus-visible:outline-primary-600 dark:text-light w-full rounded-xl px-3 py-2 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95">
                        Send reset email
                    </b>
                </button>
            </form>
        </section>
    )
}
