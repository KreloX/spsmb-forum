import React, { useEffect, useState } from 'react'
import AppRoutes from './pages/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default () => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('isDark'))
    )
    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark))
    }, [isDark])
    return (
        <div
            className={`${isDark ? 'dark' : ''} dark:bg-mixed-900 text-dark dark:text-light bg-light-200 shadow-light-300 dark:shadow-mixed-900 scrollbar scrollbar-black flex min-h-screen flex-col`}
            style={isDark ? { colorScheme: 'dark' } : {}}
        >
            <header className="m-auto w-full px-3 py-2 xl:max-w-screen-xl">
                <Navbar isDark={isDark} setIsDark={setIsDark} />
            </header>
            <main className="m-auto w-full flex-grow px-4 xl:max-w-screen-xl">
                <AppRoutes />
            </main>
            <footer className="dark:text-light-400 m-auto flex w-full flex-wrap justify-center px-8 pb-6 pt-12 xl:max-w-screen-xl">
                <Footer />
            </footer>
        </div>
    )
}
