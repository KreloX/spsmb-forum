import { bubblesIcon } from '../constants'
import CustomLink from './CustomLink'
import SVG from './SVG'

const date = new Date()

export default () => (
    <article className="flex items-center gap-1 rounded-xl bg-light-100 p-1 shadow-md dark:bg-mixed-800">
        <CustomLink to="/">
            <SVG
                className="size-20 stroke-1 p-3 hover:text-mixed-600 dark:hover:text-light-500"
                d={bubblesIcon}
            />
        </CustomLink>
        <section>
            <div className="flex">
                <CustomLink
                    className="hover:text-mixed-600 dark:hover:text-light-500"
                    to="/"
                >
                    <h3>Heading</h3>
                </CustomLink>
            </div>
            <p>
                by{' '}
                <a
                    className="text-primary-500 hover:text-primary-300 dark:text-primary-100 dark:hover:text-primary-400"
                    href="/"
                >
                    lorem ipsum
                </a>
            </p>
            <p>
                <time dateTime={date.toISOString()}>
                    {new Intl.DateTimeFormat('en-us', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                    }).format(date)}
                </time>
            </p>
        </section>
    </article>
)
