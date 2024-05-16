import React, { useEffect, useState } from 'react'
import Logo from '../logo.svg?react'
import SVG from './SVG'
import A from './A'

let logged = false

export default ({ isDark, setIsDark }) => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex select-none">
            <A href="/" className="flex items-center py-2 active:scale-95">
                <Logo className="pointer-events-none size-12" />
                <h2 className="ml-1 whitespace-nowrap tracking-tight">
                    SPŠMB Fórum
                </h2>
            </A>

            <div className="flex flex-grow items-center justify-end">
                <SVG
                    d={
                        isDark
                            ? 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                            : 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                    }
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                    onClick={() => setIsDark(!isDark)}
                />

                <div className="ml-3" />
                {logged ? (
                    <>
                        <SVG
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                        />
                        <div
                            className="flex items-center cursor-pointer ml-3"
                            onClick={() => setOpen(!open)}
                        >
                            <div className="bg-black size-10 rounded-full" />
                        </div>
                    </>
                ) : (
                    <A
                        className="flex rounded-xl bg-primary-600 px-4 py-2 font-bold text-light hover:bg-primary-500 active:scale-95"
                        href="/auth"
                    >
                        <SVG d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        Sign In
                    </A>
                )}
                {open ? (
                    <div className="absolute mt-32 bg-white rounded-xl">
                        <div>profile</div>
                        <div>options</div>
                        <div>logout</div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    )
}
