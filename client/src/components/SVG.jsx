import { twMerge } from 'tailwind-merge'

export default ({ className, onClick, ...d }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={twMerge('size-6', className)}
        onClick={onClick}
    >
        {d.d.map((element, index) => (
            <path
                key={index}
                strokeLinecap="round"
                strokeLinejoin="round"
                d={element}
            />
        ))}
    </svg>
)
