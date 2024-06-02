import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'
import ThreadLink from '../../components/ThreadLink'
import { useSearchParams } from 'react-router-dom'
import { backendURL } from '../../constants'

export default () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [threads, setThreads] = useState(Number(searchParams.get('t')))
    const [totalThreads, setTotalThreads] = useState(0)
    const [currentThreads, setCurrentThreads] = useState([])
    const threadsPerPage = 16

    useEffect(() => {
        setThreads(Number(searchParams.get('t')))

        fetch(`${backendURL}/threads/${threads}/${threadsPerPage}`, {
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
        <section className="grid gap-3">
            <Pagination
                threads={threads}
                threadsPerPage={threadsPerPage}
                totalThreads={totalThreads}
            />
            {currentThreads.map((thread, i) => (
                <ThreadLink key={i} thread={thread} />
            ))}
            <Pagination
                threads={threads}
                threadsPerPage={threadsPerPage}
                totalThreads={totalThreads}
            />
        </section>
    )
}
