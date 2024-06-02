import { twMerge } from 'tailwind-merge'

export default ({ href, aClassName, className, children }) => (
    <a href={href} className={twMerge('w-fit', aClassName)}>
        <span
            className={twMerge(
                'flex whitespace-nowrap font-semibold active:scale-95',
                className
            )}
        >
            {children}
        </span>
    </a>
)
