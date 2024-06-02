import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Auth from './Auth/Auth'
import Thread from './Thread/Thread'
import CreateThread from './CreateThread/CreateThread'
import Profile from './Profile/Profile'

export default () => (
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="auth/*" element={<Auth />} />
        <Route path="thread/*" element={<Thread />} />
        <Route path="create-thread" element={<CreateThread />} />
        <Route path="user/*" element={<Profile />} />
    </Routes>
)
