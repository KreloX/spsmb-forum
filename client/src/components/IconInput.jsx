import { twMerge } from 'tailwind-merge'
import SVG from './SVG'

export default ({
    d,
    id,
    autoComplete,
    autoFocus,
    placeholder,
    className,
    register,
    children,
}) => (
    <div>
        <SVG
            d={d}
            className="pointer-events-none absolute mx-3 my-2 stroke-mixed-400"
        />
        <input
            id={id}
            name={id}
            type={id}
            autoComplete={autoComplete}
            required
            autoFocus={autoFocus}
            placeholder={placeholder}
            className={twMerge(
                'w-full rounded-xl bg-light-200 px-11 py-2 font-semibold shadow-md outline-none ring-0 ring-inset placeholder:text-mixed-400 focus:ring-2 focus:ring-primary-500 dark:bg-mixed-700',
                className
            )}
            {...register}
        />
        {children}
    </div>
)
