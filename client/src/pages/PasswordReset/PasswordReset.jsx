import { useSearchParams } from 'react-router-dom'
import RequestResetForm from './RequestResetForm'
import PasswordChangeForm from './PasswordChangeForm'
import Wrapper from '../../components/Wrapper'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const token = searchParams.get('token')

    return (
        <Wrapper className="min-h-full px-6 py-12 lg:px-8">
            <h1 className="text-center tracking-tight">Reset your password</h1>
            {token ? (
                <PasswordChangeForm token={token} />
            ) : (
                <RequestResetForm />
            )}
        </Wrapper>
    )
}
