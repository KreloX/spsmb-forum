import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default ({ children, to, className, linkClassName }) => (
    <Link to={to} className={twMerge('w-fit', linkClassName)}>
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
