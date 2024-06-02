import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default ({ to, state, linkClassName, className, onClick, children }) => (
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
