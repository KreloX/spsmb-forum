import React, { useEffect, useRef, useState } from 'react'
import Logo from '../logo.svg?react'
import SVG from './SVG'
import A from './A'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'
import {
    bellIcon,
    cogIcon,
    loginIcon,
    logoutIcon,
    moonIcon,
    sunIcon,
    userIcon,
} from '../constants'
import { twMerge } from 'tailwind-merge'

export default ({ isDark, setIsDark }) => {
    const [open, setOpen] = useState(false)
    const { success } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const dropdownRef = useRef(null)
    const profileRef = useRef(null)

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            profileRef.current &&
            !profileRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <>
            <nav className="flex select-none px-4">
                <A href="/" className="items-center py-2 active:scale-95">
                    <Logo className="pointer-events-none size-12" />
                    <h2 className="ml-1 whitespace-nowrap tracking-tight">
                        SPŠMB Fórum
                    </h2>
                </A>

                <section className="flex flex-grow items-center justify-end">
                    <SVG
                        d={isDark ? moonIcon : sunIcon}
                        className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                        onClick={() => setIsDark(!isDark)}
                    />

                    <div className="ml-3" />
                    {success ? (
                        <>
                            <SVG
                                d={bellIcon}
                                className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                            />
                            <div
                                className="flex items-center cursor-pointer ml-3"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen(!open)
                                }}
                                ref={profileRef}
                            >
                                <div className="bg-black size-10 rounded-full" />
                            </div>
                        </>
                    ) : (
                        <A
                            className="rounded-xl bg-primary-600 px-4 py-2 font-bold text-light hover:bg-primary-500 active:scale-95 shadow-md"
                            href="/auth"
                        >
                            <SVG d={loginIcon} />
                            Sign In
                        </A>
                    )}
                </section>
            </nav>
            <div className="flex justify-end">
                <div
                    className={twMerge(
                        'absolute bg-light-100 dark:bg-mixed-800 rounded-xl shadow-md border border-light-400 dark:border-mixed-400 p-3 flex flex-col w-min transition duration-100 origin-top ease-in-out',
                        open ? '' : 'scale-y-90 opacity-0'
                    )}
                    ref={dropdownRef}
                >
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 p-2 rounded-lg"
                        aClassName="w-full"
                        href="/user"
                    >
                        <SVG className="mr-2" d={userIcon} />
                        Profile
                    </A>
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 p-2 rounded-lg"
                        aClassName="w-full"
                        href="/options"
                    >
                        <SVG className="mr-2" d={cogIcon} />
                        Options
                    </A>
                    <hr className="my-2 border-current" />
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 p-2 rounded-lg"
                        aClassName="w-full"
                        onClick={() => dispatch(logout())}
                        href=""
                    >
                        <SVG className="mr-2" d={logoutIcon} />
                        Sign out
                    </A>
                </div>
            </div>
        </>
    )
}
