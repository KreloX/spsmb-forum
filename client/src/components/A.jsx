import { twMerge } from 'tailwind-merge'

export default ({ children, href, className, aClassName }) => (
    <a href={href} className={twMerge('w-fit', aClassName)}>
        <p
            className={twMerge(
                'flex whitespace-nowrap font-semibold active:scale-95',
                className
            )}
        >
            {children}
        </p>
    </a>
)
