import { twMerge } from 'tailwind-merge'

export default ({ d, className, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={twMerge('size-6', className)}
        onClick={onClick}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
)
