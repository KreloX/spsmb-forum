import { useForm } from 'react-hook-form'
import { userIcon } from '../constants'
import IconInput from './IconInput'

export default () => {
    const { register, handleSubmit } = useForm()

    const submitForm = (formData) => {}

    return (
        <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
            <h1 className="text-center tracking-tight">Reset your password</h1>
            <b className="mx-8 mt-4 text-pretty">
                A link to change your password will be sent to your email inbox.
            </b>
            <form
                className="mx-auto mt-8 grid w-full max-w-sm gap-y-5"
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
                    <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                        Send reset email
                    </b>
                </button>
            </form>
        </section>
    )
}
