import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Thread from './Thread/Thread'
import CreateThreadForm from './CreateThreadForm/CreateThreadForm'
import Profile from './Profile/Profile'
import Reset from './PasswordReset/PasswordReset'
import RegisterForm from './RegisterForm/RegisterForm'
import SignInForm from './SignInForm/SignInForm'

export default () => (
    <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="auth/sign-in" element={<SignInForm />} />
        <Route path="auth/register" element={<RegisterForm />} />
        <Route path="auth/reset-password" element={<Reset />} />
        <Route path="create-thread" element={<CreateThreadForm />} />
        <Route path="thread/:threadId" element={<Thread />} />
        <Route path="user/:username" element={<Profile />} />
    </Routes>
)
