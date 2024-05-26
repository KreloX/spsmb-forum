import SignInForm from '../../components/SignInForm'
import RegisterForm from '../../components/RegisterForm'
import { Link, Route, Routes } from 'react-router-dom'
import ResetForm from '../../components/ResetForm'

export default () => {
    return (
        <div className="dark:bg-mixed-800 bg-light-100 mx-auto flex max-w-lg flex-col rounded-xl shadow-md">
            <Routes>
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/reset-password" element={<ResetForm />} />
            </Routes>
        </div>
    )
}
