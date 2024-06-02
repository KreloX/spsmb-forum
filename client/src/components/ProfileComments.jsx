import IconInput from './IconInput'

export default () => {
    return (
        <form className="space-y-5 mb-10">
            <div className="mb-5 dark:bg-mixed-700 bg-light-200 flex flex-col max-h-96 rounded-tr-xl rounded-xl">
                <div className="ml-5 mt-4 flex">
                    <div className=" rounded-full min-h-12 max-h-12 min-w-12 max-w-12 dark:bg-mixed-900 bg-light-300"></div>
                    <div className="ml-2 mr-8 mt-2 text-xl border-b dark:border-mixed-800 border-light-500 dark:text-light-400 text-light-600">
                        Title Title Title Title Title Title Title Title Title
                        Title Title Title Title
                    </div>
                </div>
                <div className="flex">
                    <div className="ml-5 mt-6 dark:text-mixed-800 text-light-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                            />
                        </svg>
                    </div>
                    <div className="ml-3 mr-8 p-1 mt-2 mx-auto border dark:border-mixed-800 border-light-500 border-solid rounded-tr-xl rounded-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </div>
                <div className="ml-8 mb-2">Date commented: date here</div>
            </div>
        </form>
    )
}
