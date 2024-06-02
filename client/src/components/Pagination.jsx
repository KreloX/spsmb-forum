import { leftIcon, lineIcon, rightIcon } from '../constants'
import SVG from './SVG'
import { twMerge } from 'tailwind-merge'
import { Fragment } from 'react'
import CustomLink from './CustomLink'

export default ({ threads, threadsPerPage, totalThreads }) => {
    const currentPage = Math.ceil(threads / threadsPerPage)
    const pages = Math.ceil(totalThreads / threadsPerPage) + 1

    return (
        <section className="flex justify-center gap-1 text-sm sm:gap-2 sm:text-base">
            <CustomLink
                className={twMerge(
                    'scale-90 rounded-full px-1 py-0.5 sm:scale-100 sm:px-4 sm:py-1',
                    threads / threadsPerPage == 0
                        ? 'bg-light-200 dark:bg-mixed-900 text-mixed-400 dark:text-mixed-600 hover:text-mixed-400 dark:hover:text-mixed-600 cursor-not-allowed shadow-none'
                        : 'bg-light-100 dark:bg-mixed-800 hover:text-mixed-600 dark:hover:text-light-500 shadow-md'
                )}
                to={`?t=${Math.max(0, threads - threadsPerPage)}`}
            >
                <SVG d={leftIcon} />
            </CustomLink>
            {Array.from({
                length: pages,
            }).map((_, i) => (
                <Fragment key={i}>
                    {i == 0 ||
                    (currentPage < 4 && i < 5) ||
                    i == currentPage - 1 ||
                    i == currentPage ||
                    i == currentPage + 1 ||
                    i == pages - 1 ||
                    (currentPage > pages - 5 && i > pages - 6) ? (
                        <CustomLink
                            className={twMerge(
                                'px-3 py-1 shadow-md sm:px-4',
                                currentPage == i
                                    ? 'bg-primary-600 text-light cursor-default rounded-full'
                                    : 'bg-light-100 dark:bg-mixed-800 hover:text-mixed-600 dark:hover:text-light-500 rounded-full'
                            )}
                            to={`?t=${i * threadsPerPage}`}
                        >
                            <b>{i + 1}</b>
                        </CustomLink>
                    ) : (i == 5 && currentPage < 3) ||
                      (i == pages - 6 && currentPage > pages - 4) ||
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
                    threads >= totalThreads
                        ? 'bg-light-200 dark:bg-mixed-900 text-mixed-400 dark:text-mixed-600 hover:text-mixed-400 dark:hover:text-mixed-600 cursor-not-allowed shadow-none'
                        : 'bg-light-100 dark:bg-mixed-800 hover:text-mixed-600 dark:hover:text-light-500 shadow-md'
                )}
                to={`?t=${Math.min(totalThreads, threads + threadsPerPage)}`}
            >
                <SVG d={rightIcon} />
            </CustomLink>
        </section>
    )
}
