import { leftIcon, lineIcon, rightIcon } from '../constants'
import SVG from './SVG'
import { twMerge } from 'tailwind-merge'
import { Fragment } from 'react'
import CustomLink from './CustomLink'

export default ({ threads, threadsPerPage, totalThreads }) => {
    const currentPage = Math.ceil(threads / threadsPerPage)
    const pages = Math.ceil(totalThreads / threadsPerPage) - 1

    return (
        <section className="flex justify-center gap-1 text-sm sm:gap-2 sm:text-base">
            <CustomLink
                className={twMerge(
                    'scale-90 rounded-full px-1 py-0.5 sm:scale-100 sm:px-4 sm:py-1',
                    threads / threadsPerPage == 0
                        ? 'cursor-not-allowed bg-light-200 text-mixed-400 shadow-none hover:text-mixed-400 dark:bg-mixed-900 dark:text-mixed-600 dark:hover:text-mixed-600'
                        : 'bg-light-100 shadow-md hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                )}
                to={`?t=${Math.max(0, threads - threadsPerPage)}`}
            >
                <SVG d={leftIcon} />
            </CustomLink>
            {Array.from({
                length: pages + 1,
            }).map((_, i) => (
                <Fragment key={i}>
                    {i == 0 ||
                    (currentPage < 4 && i < 5) ||
                    i == currentPage - 1 ||
                    i == currentPage ||
                    i == currentPage + 1 ||
                    i == pages ||
                    (currentPage > pages - 4 && i > pages - 5) ? (
                        <CustomLink
                            className={twMerge(
                                'px-3 py-1 shadow-md sm:px-4',
                                currentPage == i
                                    ? 'cursor-default rounded-full bg-primary-600 text-light'
                                    : 'rounded-full bg-light-100 hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                            )}
                            to={`?t=${i * threadsPerPage}`}
                        >
                            <b>{i + 1}</b>
                        </CustomLink>
                    ) : (i == 5 && currentPage < 3) ||
                      (i == pages - 5 && currentPage > pages - 3) ||
                      Math.abs(i - currentPage) == 3 ? (
                        <span className="scale-90 px-0.5 py-0.5 sm:scale-100 sm:px-1 sm:py-1">
                            <SVG d={lineIcon} />
                        </span>
                    ) : (
                        <></>
                    )}
                </Fragment>
            ))}
            <CustomLink
                className={twMerge(
                    'scale-90 rounded-full px-1 py-0.5 sm:scale-100 sm:px-4 sm:py-1',
                    threads + threadsPerPage >= totalThreads
                        ? 'cursor-not-allowed bg-light-200 text-mixed-400 shadow-none hover:text-mixed-400 dark:bg-mixed-900 dark:text-mixed-600 dark:hover:text-mixed-600'
                        : 'bg-light-100 shadow-md hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                )}
                to={`?t=${Math.min(pages * threadsPerPage, threads + threadsPerPage)}`}
            >
                <SVG d={rightIcon} />
            </CustomLink>
        </section>
    )
}
