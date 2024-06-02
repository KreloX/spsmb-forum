import SignInForm from '../../components/SignInForm'
import RegisterForm from '../../components/RegisterForm'
import { Route, Routes } from 'react-router-dom'
import Reset from '../../components/Reset'

export default () => {
    return (
        <div className="mx-auto flex max-w-lg flex-col rounded-xl bg-light-100 shadow-md dark:bg-mixed-800">
            <Routes>
                <Route path="sign-in" element={<SignInForm />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="reset-password" element={<Reset />} />
            </Routes>
        </div>
    )
}
