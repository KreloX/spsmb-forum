export default ({ user }) => {
    return (
        <div className="mb-10 space-y-5">
            <article className="flex max-h-96 flex-col rounded-xl rounded-tr-xl bg-light-200 px-8 py-2 dark:bg-mixed-700">
                <p className="w-fit border-b border-light-500 text-xl dark:border-mixed-800">
                    Title Title Title Title Title Title Title Title
                </p>
                <p className="pl-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet dolore aliquid quasi fuga debitis voluptatibus, placeat
                    alias aspernatur libero minus est, soluta excepturi deleniti
                    repudiandae doloremque rem. Sapiente, non voluptates.
                </p>
                <p>
                    Date created: <time>date here</time>
                </p>
            </article>
        </div>
    )
}
