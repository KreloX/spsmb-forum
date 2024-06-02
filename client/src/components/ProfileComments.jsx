export default ({ user }) => {
    return (
        <form className="mb-10 space-y-5">
            <div className="mb-5 flex max-h-96 flex-col rounded-xl rounded-tr-xl bg-light-200 dark:bg-mixed-700">
                <div className="ml-5 mt-4 flex">
                    <div className=" max-h-12 min-h-12 min-w-12 max-w-12 rounded-full bg-light-300 dark:bg-mixed-900"></div>
                    <div className="ml-2 mr-8 mt-2 border-b border-light-500 text-xl text-light-600 dark:border-mixed-800 dark:text-light-400">
                        Title Title Title Title Title Title Title Title Title
                        Title Title Title Title
                    </div>
                </div>
                <div className="flex">
                    <div className="ml-5 mt-6 text-light-500 dark:text-mixed-800">
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
                    <div className="mx-auto ml-3 mr-8 mt-2 rounded-xl rounded-tr-xl border border-solid border-light-500 p-1 dark:border-mixed-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </div>
                <div className="mb-2 ml-8">Date commented: date here</div>
            </div>
        </form>
    )
}
