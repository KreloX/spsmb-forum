import { Link, useSearchParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default ({
    to,
    query,
    state,
    linkClassName,
    className,
    onClick,
    children,
}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    if (!to) to = ''
    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            searchParams.set(key, value)
        })
        to += `?${searchParams.toString()}`
    }
    return (
        <Link
            to={to}
            state={state}
            className={twMerge('w-fit', linkClassName)}
            onClick={onClick}
        >
            <span
                className={twMerge(
                    'flex whitespace-nowrap font-semibold active:scale-95',
                    className
                )}
            >
                {children}
            </span>
        </Link>
    )
}
