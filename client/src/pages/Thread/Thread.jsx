import { useEffect, useState } from 'react'
import { backendURL } from '../../constants'
import { useForm } from 'react-hook-form'
import CustomLink from '../../components/CustomLink'
import { useSelector } from 'react-redux'

export default () => {
    const { register, handleSubmit } = useForm()
    const { username } = useSelector((state) => state.auth)
    const [thread, setThread] = useState()
    const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)

    const submitForm = (formData) => {
        fetch(`${backendURL}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                text: formData.comment,
                author: username,
                threadId: window.location.pathname.split('/').pop(),
            }),
        })
            .then((response) => response.json())
            .then((data) => data.payload)
            .then(() => setRefresh(!refresh))
    }

    useEffect(() => {
        fetch(
            `${backendURL}/threads/${window.location.pathname.split('/').pop()}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((data) => data.payload)
            .then((data) => setThread(data))

        fetch(
            `${backendURL}/comments/${window.location.pathname.split('/').pop()}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((data) => data.payload)
            .then((data) => setComments(data))
    }, [refresh])

    return (
        <div className="mx-auto flex flex-col rounded-xl bg-light-100 shadow-md dark:bg-mixed-800">
            <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
                <h1 className="tracking-tight">{thread?.header}</h1>
                <p className="text-pretty">{thread?.text}</p>
                <p className="flex">
                    by&nbsp;
                    <CustomLink to={`/user/${thread?.user}`}>
                        {thread?.user}
                    </CustomLink>
                </p>
            </section>

            <section className="flex min-h-full flex-col px-6 py-12 lg:px-8">
                <form
                    className="mx-auto mt-8 grid w-full gap-y-5"
                    onSubmit={handleSubmit(submitForm)}
                >
                    <textarea
                        placeholder="Comment"
                        rows="8"
                        required
                        className="w-full rounded-xl bg-light-200 px-4 py-2 font-semibold shadow-md outline-none ring-0 ring-inset placeholder:text-mixed-400 focus:ring-2 focus:ring-primary-500 dark:bg-mixed-700"
                        {...register('comment')}
                    />
                    <button
                        type="submit"
                        className="ml-auto mt-3 flex w-3/5 max-w-xs"
                    >
                        <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                            Comment
                        </b>
                    </button>
                </form>

                {comments.map((comment, i) => (
                    <div className="mt-3 rounded-xl bg-light-200 p-3 dark:bg-mixed-700">
                        <p key={i}>{comment.text}</p>
                        <p key={i} className="flex">
                            by&nbsp;
                            <CustomLink to={`/user/${comment.author}`}>
                                {thread?.user}
                            </CustomLink>
                        </p>
                    </div>
                ))}
            </section>
        </div>
    )
}
