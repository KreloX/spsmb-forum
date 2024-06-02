import { leftIcon, lineIcon, rightIcon, startQuery } from '../constants'
import SVG from './SVG'
import { twMerge } from 'tailwind-merge'
import { Fragment } from 'react'
import CustomLink from './CustomLink'

export default ({ start, threadsPerPage, totalThreads }) => {
    const currentPage = Math.ceil(start / threadsPerPage)
    const pages = Math.ceil(totalThreads / threadsPerPage) - 1

    return (
        <section className="flex justify-center gap-1 text-sm sm:gap-2 sm:text-base">
            <CustomLink
                linkClassName={twMerge(
                    'scale-90 rounded-full sm:scale-100',
                    start / threadsPerPage == 0 ? 'cursor-not-allowed' : ''
                )}
                className={twMerge(
                    'rounded-full px-1 py-0.5 sm:px-4 sm:py-1',
                    start / threadsPerPage == 0
                        ? 'bg-light-200 text-mixed-400 shadow-none hover:text-mixed-400 dark:bg-mixed-900 dark:text-mixed-600 dark:hover:text-mixed-600'
                        : 'bg-light-100 shadow-md hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                )}
                to={`?${startQuery}=${Math.max(0, start - threadsPerPage)}`}
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
                            linkClassName={twMerge(
                                'rounded-full shadow-md',
                                currentPage == i ? 'cursor-default' : ''
                            )}
                            className={twMerge(
                                'rounded-full px-3 py-1 sm:px-4',
                                currentPage == i
                                    ? 'bg-primary-600 text-light'
                                    : 'bg-light-100 hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                            )}
                            to={`?${startQuery}=${i * threadsPerPage}`}
                        >
                            {i + 1}
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
                linkClassName={twMerge(
                    'scale-90 rounded-full sm:scale-100',
                    start + threadsPerPage >= totalThreads
                        ? 'cursor-not-allowed'
                        : ''
                )}
                className={twMerge(
                    'rounded-full px-1 py-0.5 sm:px-4 sm:py-1',
                    start + threadsPerPage >= totalThreads
                        ? 'bg-light-200 text-mixed-400 shadow-none hover:text-mixed-400 dark:bg-mixed-900 dark:text-mixed-600 dark:hover:text-mixed-600'
                        : 'bg-light-100 shadow-md hover:text-mixed-600 dark:bg-mixed-800 dark:hover:text-light-500'
                )}
                to={`?${startQuery}=${Math.min(pages * threadsPerPage, start + threadsPerPage)}`}
            >
                <SVG d={rightIcon} />
            </CustomLink>
        </section>
    )
}
