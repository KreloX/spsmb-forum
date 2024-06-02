import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ProfilePosts from '../../components/ProfilePosts'
import ProfileComments from '../../components/ProfileComments'
import { backendURL } from '../../constants'

export default () => {
    const [isCommentScreen, setIsCommentScreen] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {
        fetch(
            `${backendURL}/users/${window.location.pathname.split('/').pop()}`,
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
            .then((data) => setUser(data))
    }, [])

    return (
        <>
            <div className="mx-auto flex max-h-96 max-w-3xl rounded-xl rounded-tr-xl bg-light-100 dark:bg-mixed-800">
                <div className="m-8 min-h-32 min-w-32 rounded-full border-4 border-dashed border-primary-500 bg-light-300 dark:bg-mixed-900"></div>
                <div className="mt-10 flex flex-col">
                    <div className=" text-3xl">{`${user?.username}`}</div>
                    <div className="text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-6 flex max-h-96 max-w-3xl flex-col rounded-xl rounded-tr-xl bg-light-100 dark:bg-mixed-800">
                <div className="flex text-lg font-semibold">
                    <button
                        className={twMerge(
                            'flex-1 rounded-br-xl rounded-tl-xl bg-primary-500 px-3',
                            isCommentScreen
                                ? ' text-light-100 hover:bg-primary-400 dark:text-light'
                                : ' cursor-default bg-transparent'
                        )}
                        onClick={() => setIsCommentScreen(false)}
                    >
                        Posts
                    </button>
                    <button
                        className={twMerge(
                            'flex-1 rounded-bl-xl rounded-tr-xl bg-primary-500 px-3',
                            isCommentScreen
                                ? ' cursor-default bg-transparent'
                                : ' text-light-100 hover:bg-primary-400 dark:text-light'
                        )}
                        onClick={() => setIsCommentScreen(true)}
                    >
                        Comments
                    </button>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
                    {isCommentScreen ? <ProfileComments user={user} /> : <ProfilePosts user={user} />}
                </div>
            </div>
        </>
    )
}
