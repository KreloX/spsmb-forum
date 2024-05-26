import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Auth from './Auth/Auth'

export default () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
    </Routes>
)
