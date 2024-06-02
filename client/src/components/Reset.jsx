import { useSearchParams } from 'react-router-dom'
import RequestResetForm from './RequestResetForm'
import PasswordChangeForm from './PasswordChangeForm'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const token = searchParams.get('token')

    return (
        <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
            <h1 className="text-center tracking-tight">Reset your password</h1>
            {token == null ? (
                <RequestResetForm />
            ) : (
                <PasswordChangeForm token={token} />
            )}
        </section>
    )
}
