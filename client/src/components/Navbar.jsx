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
            <nav className="flex select-none px-5">
                <A href="/" className="items-center py-2 active:scale-95">
                    <Logo className="pointer-events-none size-12" />
                    <h2 className="ml-1 whitespace-nowrap tracking-tight">
                        SPŠMB Fórum
                    </h2>
                </A>

                <section className="flex flex-grow items-center justify-end">
                    <SVG
                        d={isDark ? moonIcon : sunIcon}
                        className="hover:bg-light-400 dark:hover:bg-mixed-800 flex size-10 cursor-pointer items-center justify-center rounded-full p-2"
                        onClick={() => setIsDark(!isDark)}
                    />

                    <div className="ml-3" />
                    {success ? (
                        <>
                            <SVG
                                d={bellIcon}
                                className="hover:bg-light-400 dark:hover:bg-mixed-800 flex size-10 cursor-pointer items-center justify-center rounded-full p-2"
                            />
                            <div
                                className="ml-3 flex cursor-pointer items-center"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen(!open)
                                }}
                                ref={profileRef}
                            >
                                <div className="size-10 rounded-full bg-black" />
                            </div>
                        </>
                    ) : (
                        <A
                            className="bg-primary-600 text-light hover:bg-primary-500 rounded-xl px-4 py-2 font-bold shadow-md active:scale-95"
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
                        'bg-light-100 dark:bg-mixed-800 border-light-400 dark:border-mixed-400 absolute flex w-min origin-top flex-col rounded-xl border p-3 shadow-md transition duration-100 ease-in-out',
                        open ? '' : 'pointer-events-none scale-y-90 opacity-0'
                    )}
                    ref={dropdownRef}
                >
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 rounded-lg p-2"
                        aClassName="w-full"
                        href="/user"
                    >
                        <SVG className="mr-2" d={userIcon} />
                        Profile
                    </A>
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 rounded-lg p-2"
                        aClassName="w-full"
                        href="/options"
                    >
                        <SVG className="mr-2" d={cogIcon} />
                        Options
                    </A>
                    <hr className="my-2 border-current" />
                    <A
                        className="hover:bg-light-200 dark:hover:bg-mixed-900 rounded-lg p-2"
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
