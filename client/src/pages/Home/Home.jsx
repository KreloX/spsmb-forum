import { useEffect, useRef, useState } from 'react'
import Pagination from '../../components/Pagination'
import ThreadLink from '../../components/ThreadLink'
import { Link, useSearchParams } from 'react-router-dom'
import {
    backendURL,
    downIcon,
    plusIcon,
    startQuery,
    threadsPerPageOptions,
    threadsPerPageQuery,
} from '../../constants'
import CustomLink from '../../components/CustomLink'
import SVG from '../../components/SVG'
import { useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [start, setStart] = useState(0)
    const [threadsPerPage, setThreadsPerPage] = useState(
        searchParams.get(threadsPerPageQuery)
            ? Math.max(1, Number(searchParams.get(threadsPerPageQuery)))
            : 16
    )
    const [totalThreads, setTotalThreads] = useState(0)
    const [currentThreads, setCurrentThreads] = useState([])
    const { username } = useSelector((state) => state.auth)
    const [threadsOpen, setThreadsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setThreadsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    const threadsWidth = document.getElementById('threadsPerPage')?.offsetWidth

    useEffect(() => {
        setStart(Number(searchParams.get(startQuery)))

        fetch(`${backendURL}/threads/range/${start}/${threadsPerPage}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setCurrentThreads(data.payload))

        fetch(`${backendURL}/threads/count`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setTotalThreads(data.payload))
    }, [searchParams])

    useEffect(() => {
        searchParams.set(threadsPerPageQuery, threadsPerPage)
        setSearchParams(searchParams)
    }, [threadsPerPage])

    return (
        <>
            <aside className="rounded-xl bg-light-100 dark:bg-mixed-800"></aside>
            <section className="mb-4 flex rounded-xl bg-light-100 p-4 shadow-md dark:bg-mixed-800">
                <div className="flex items-center gap-2">
                    <b>Threads per page</b>
                    <div
                        id="threadsPerPage"
                        className={twMerge(
                            'flex cursor-pointer items-center gap-1 rounded-xl bg-light-200 px-3 py-2 font-semibold shadow-md dark:bg-mixed-700',
                            threadsOpen ? 'rounded-b-none' : ''
                        )}
                        onClick={() => setThreadsOpen(!threadsOpen)}
                        onMouseDown={(e) => e.preventDefault()}
                        ref={dropdownRef}
                    >
                        {threadsPerPage}
                        <SVG
                            className={twMerge(
                                'mt-0.5 size-5 transition',
                                threadsOpen ? 'rotate-180' : ''
                            )}
                            d={downIcon}
                        />
                        {threadsOpen ? (
                            <ul
                                className={`absolute z-10 -ml-3 mb-2 mt-52 rounded-b-xl bg-light-200 shadow-md dark:bg-mixed-700`}
                                style={{ minWidth: threadsWidth }}
                            >
                                {threadsPerPageOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="px-3 py-2 last:rounded-b-xl hover:bg-light-300 dark:hover:bg-mixed-800"
                                        onClick={() =>
                                            setThreadsPerPage(option)
                                        }
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <CustomLink
                    className={
                        username == null
                            ? 'hidden'
                            : 'flex items-center rounded-xl bg-primary-600 px-4 py-2 text-light shadow-md hover:bg-primary-500 active:scale-95'
                    }
                    to="create-thread"
                >
                    <SVG className="size-8" d={plusIcon} />
                    <h3>Create a thread</h3>
                </CustomLink>
            </section>
            <section className="grid gap-3">
                <Pagination
                    start={start}
                    threadsPerPage={threadsPerPage}
                    totalThreads={totalThreads}
                />
                {currentThreads.map((thread, i) => (
                    <ThreadLink key={i} thread={thread} />
                ))}
                <Pagination
                    start={start}
                    threadsPerPage={threadsPerPage}
                    totalThreads={totalThreads}
                />
            </section>
        </>
    )
}
