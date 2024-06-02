import React, { useEffect, useState } from 'react'
import AppRoutes from './pages/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validateToken } from './features/authActions'

export default () => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('isDark'))
    )
    const dispatch = useDispatch()
    const { username, authToken } = useSelector((state) => state.auth)

    if (username != null) dispatch(validateToken({ username, authToken }))

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark))
    }, [isDark])

    return (
        <BrowserRouter>
            <div
                className={`${isDark ? 'dark' : ''} flex min-h-screen flex-col bg-light-200 text-dark shadow-light-300 dark:bg-mixed-900 dark:text-light dark:shadow-mixed-900`}
                style={isDark ? { colorScheme: 'dark' } : {}}
            >
                <header className="m-auto w-full px-3 py-2 xl:max-w-screen-xl">
                    <Navbar isDark={isDark} setIsDark={setIsDark} />
                </header>
                <main className="m-auto w-full flex-grow px-4 xl:max-w-screen-xl">
                    <AppRoutes />
                </main>
                <footer className="m-auto flex w-full flex-wrap justify-center px-8 pb-6 pt-12 xl:max-w-screen-xl dark:text-light-400">
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    )
}
