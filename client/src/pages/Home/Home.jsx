import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'
import ThreadLink from '../../components/ThreadLink'
import { useSearchParams } from 'react-router-dom'
import {
    backendURL,
    plusIcon,
    startQuery,
    threadsPerPageQuery,
} from '../../constants'
import CustomLink from '../../components/CustomLink'
import SVG from '../../components/SVG'
import { useSelector } from 'react-redux'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [start, setStart] = useState(0)
    const [threadsPerPage, setThreadsPerPage] = useState(16)
    const [totalThreads, setTotalThreads] = useState(0)
    const [currentThreads, setCurrentThreads] = useState([])
    const { username } = useSelector((state) => state.auth)

    useEffect(() => {
        setStart(Number(searchParams.get(startQuery)))
        setThreadsPerPage(
            searchParams.get(threadsPerPageQuery)
                ? Math.max(1, Number(searchParams.get(threadsPerPageQuery)))
                : 16
        )

        fetch(`${backendURL}/threads/range/${start}/${threadsPerPage}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => data.payload)
            .then((data) => setCurrentThreads(data))

        fetch(`${backendURL}/threads/count`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => data.payload)
            .then((data) => setTotalThreads(data))
    }, [searchParams])

    return (
        <>
            <aside className="rounded-xl bg-light-100 dark:bg-mixed-800"></aside>
            <section className="mb-4 flex rounded-xl bg-light-100 p-4 shadow-md dark:bg-mixed-800">
                <div className="flex hidden items-center gap-2">
                    <b>threads per page</b>
                    <b className="rounded-xl bg-light-200 p-2 dark:bg-mixed-700">
                        {threadsPerPage}
                    </b>
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
                    <h3 className="pl-1">Create a thread</h3>
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
