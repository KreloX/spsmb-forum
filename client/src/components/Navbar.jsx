import React, { useEffect, useRef, useState } from 'react'
import Logo from '../logo.svg?react'
import SVG from './SVG'
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
import CustomLink from './CustomLink'

export default ({ isDark, setIsDark }) => {
    const [open, setOpen] = useState(false)
    const { username } = useSelector((state) => state.auth)
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
                <CustomLink
                    className="items-center py-2 active:scale-95"
                    to="/"
                >
                    <Logo className="pointer-events-none size-12" />
                    <h2 className="ml-1 whitespace-nowrap tracking-tight">
                        SPŠMB Fórum
                    </h2>
                </CustomLink>

                <section className="flex flex-grow items-center justify-end">
                    <SVG
                        d={isDark ? moonIcon : sunIcon}
                        className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                        onClick={() => setIsDark(!isDark)}
                    />

                    <div className="ml-3" />
                    {username != null ? (
                        <>
                            <SVG
                                className="flex size-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-light-400 dark:hover:bg-mixed-800"
                                d={bellIcon}
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
                        <CustomLink
                            className="rounded-xl bg-primary-600 px-4 py-2 font-bold text-light shadow-md hover:bg-primary-500"
                            to="/auth/sign-in"
                            state="sign-in"
                        >
                            <SVG d={loginIcon} />
                            Sign In
                        </CustomLink>
                    )}
                </section>
            </nav>
            <div className="flex justify-end">
                <div
                    className={twMerge(
                        'absolute flex w-min origin-top flex-col rounded-xl border border-light-400 bg-light-100 p-3 shadow-md transition duration-100 ease-in-out dark:border-mixed-400 dark:bg-mixed-800',
                        open ? '' : 'pointer-events-none scale-y-90 opacity-0'
                    )}
                    ref={dropdownRef}
                >
                    <CustomLink
                        className="rounded-lg p-2 hover:bg-light-200 dark:hover:bg-mixed-900"
                        linkClassName="w-full"
                        to={`/user/${username}`}
                    >
                        <SVG className="mr-2" d={userIcon} />
                        Profile
                    </CustomLink>
                    <hr className="my-2 border-current" />
                    <CustomLink
                        className="rounded-lg p-2 hover:bg-light-200 dark:hover:bg-mixed-900"
                        linkClassName="w-full"
                        onClick={() => {
                            dispatch(logout())
                            setOpen(false)
                        }}
                        to=""
                    >
                        <SVG className="mr-2" d={logoutIcon} />
                        Sign out
                    </CustomLink>
                </div>
            </div>
        </>
    )
}
