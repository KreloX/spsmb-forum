import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { backendURL } from '../../constants'
import { useNavigate } from 'react-router-dom'

export default () => {
    const { register, handleSubmit } = useForm()
    const { username } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const submitForm = (formData) => {
        fetch(`${backendURL}/threads`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                header: formData.title,
                text: formData.body,
                user: username,
            }),
        })
            .then((response) => response.json())
            .then((data) => data.payload)
            .then((data) => navigate(`/thread/${data._id}`))
    }

    return (
        <div className="mx-auto flex max-w-2xl flex-col rounded-xl bg-light-100 shadow-md dark:bg-mixed-800">
            <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
                <h1 className="text-center tracking-tight">Create a thread</h1>
                <form
                    className="mx-auto mt-8 grid w-full gap-y-5"
                    onSubmit={handleSubmit(submitForm)}
                >
                    <input
                        name="title"
                        type="text"
                        required
                        autoFocus={true}
                        placeholder="Title"
                        className="w-full rounded-xl bg-light-200 px-4 py-2 font-semibold shadow-md outline-none ring-0 ring-inset placeholder:text-mixed-400 focus:ring-2 focus:ring-primary-500 dark:bg-mixed-700"
                        {...register('title')}
                    />
                    <textarea
                        placeholder="Body"
                        rows="8"
                        required
                        className="w-full rounded-xl bg-light-200 px-4 py-2 font-semibold shadow-md outline-none ring-0 ring-inset placeholder:text-mixed-400 focus:ring-2 focus:ring-primary-500 dark:bg-mixed-700"
                        {...register('body')}
                    />
                    <button
                        type="submit"
                        className="mx-auto mt-3 flex w-3/5 max-w-xs"
                    >
                        <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                            Create
                        </b>
                    </button>
                </form>
            </section>
        </div>
    )
}
