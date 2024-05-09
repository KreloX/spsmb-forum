import { twMerge } from 'tailwind-merge'

export default ({ children, href, className }) => (
    <a href={href} className="w-fit">
        <p
            className={twMerge(
                'whitespace-nowrap font-semibold active:scale-95',
                className
            )}
        >
            {children}
        </p>
    </a>
)
