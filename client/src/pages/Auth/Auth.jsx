import SignInForm from '../../components/SignInForm'
import RegisterForm from '../../components/RegisterForm'
import { Link, Route, Routes } from 'react-router-dom'
import ResetForm from '../../components/ResetForm'

export default () => {
    return (
        <div className="mx-auto flex max-w-lg flex-col rounded-xl bg-light-100 shadow-md dark:bg-mixed-800">
            <Routes>
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/reset-password" element={<ResetForm />} />
            </Routes>
        </div>
    )
}
