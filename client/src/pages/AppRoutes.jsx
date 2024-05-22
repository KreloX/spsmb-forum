import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Auth from './Auth/Auth'
import Profile from './Profile/Profile'
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
)
