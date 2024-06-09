import { twMerge } from 'tailwind-merge'

export default ({ className, children }) => (
    <section
        className={twMerge(
            'mx-auto flex max-w-lg flex-col rounded-xl bg-light-100 shadow-md dark:bg-mixed-800',
            className
        )}
    >
        {children}
    </section>
)
