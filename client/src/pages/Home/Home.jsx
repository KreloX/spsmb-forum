import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'
import ThreadLink from '../../components/ThreadLink'
import { useSearchParams } from 'react-router-dom'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [threads, setThreads] = useState(Number(searchParams.get('t')))
    const threadsPerPage = 16
    const totalThreads = 220

    useEffect(() => {
        setThreads(Number(searchParams.get('t')))
    }, [searchParams])

    return (
        <section className="grid gap-3">
            <Pagination
                threads={threads}
                threadsPerPage={threadsPerPage}
                totalThreads={totalThreads}
            />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <ThreadLink />
            <Pagination
                threads={threads}
                threadsPerPage={threadsPerPage}
                totalThreads={totalThreads}
            />
        </section>
    )
}
