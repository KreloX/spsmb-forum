import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default ({ to, state, className, linkClassName, children }) => (
    <Link to={to} state={state} className={twMerge('w-fit', linkClassName)}>
        <p
            className={twMerge(
                'flex whitespace-nowrap font-semibold active:scale-95',
                className
            )}
        >
            {children}
        </p>
    </Link>
)
