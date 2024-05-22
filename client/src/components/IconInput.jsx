import { twMerge } from 'tailwind-merge'
import SVG from './SVG'

export default ({
    d,
    id,
    autoComplete,
    placeholder,
    value,
    className,
    register,
    children,
}) => (
    <div>
        <SVG
            d={d}
            className="stroke-dark-400 pointer-events-none absolute mx-3 my-2"
        />
        <input
            id={id}
            name={id}
            type={id}
            autoComplete={autoComplete}
            required
            placeholder={placeholder}
            value={value}
            className={twMerge(
                'focus:ring-primary-500 dark:bg-mixed-700 placeholder:text-dark-400 bg-light-200 w-full rounded-xl px-11 py-2 font-semibold shadow-md outline-none ring-0 ring-inset autofill:text-green-700 focus:ring-2',
                className
            )}
            {...register}
        />
        {children}
    </div>
)
