import { turnArrowIcon } from '../../constants'
import SVG from '../../components/SVG'

export default ({ user }) => {
    return (
        <div className="mb-10 space-y-5">
            <article className="flex max-h-96 flex-col rounded-xl rounded-tr-xl bg-light-200 dark:bg-mixed-700">
                <div className="ml-5 mt-4 flex">
                    <div className=" max-h-12 min-h-12 min-w-12 max-w-12 rounded-full bg-light-300 dark:bg-mixed-900"></div>
                    <p className="pl-2 mr-8 mt-2 border-b border-light-500 text-xl text-light-600 dark:border-mixed-800 dark:text-light-400">
                        Title Title Title Title Title Title Title Title
                    </p>
                </div>
                <div className="flex">
                    <div className="ml-5 mt-6 text-light-500 dark:text-mixed-800">
                        <SVG className="size-10" d={turnArrowIcon} />
                    </div>
                    <div className="mx-auto ml-3 mr-8 mt-2 rounded-xl rounded-tr-xl border border-solid border-light-500 p-1 dark:border-mixed-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </div>
                <p className="pl-8">
                    Date commented: <time>date here</time>
                </p>
            </article>
        </div>
    )
}
