import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { backendURL } from '../../constants'
import { useParams } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import ProfileComments from './ProfileComments'
import ProfilePosts from './ProfilePosts'

export default () => {
    const [isCommentScreen, setIsCommentScreen] = useState(false)
    const [user, setUser] = useState()
    const [msg, setMsg] = useState()
    const { username } = useParams()

    useEffect(() => {
        fetch(`${backendURL}/users/username/${username}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data.payload)
                setMsg(data.msg)
            })
    }, [])

    return user ? (
        <>
            <Wrapper className="max-w-3xl flex-row">
                <div className="m-8 min-h-32 min-w-32 rounded-full border-4 border-dashed border-primary-500 bg-light-300 dark:bg-mixed-900"></div>
                <article className="mt-10 flex flex-col">
                    <h1>{user?.username}</h1>
                    <div className="text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet dolore aliquid quasi fuga debitis voluptatibus,
                        placeat alias aspernatur libero minus est, soluta
                        excepturi deleniti repudiandae doloremque rem. Sapiente,
                        non voluptates.
                    </div>
                </article>
            </Wrapper>
            <Wrapper className="mt-6 max-w-3xl">
                <div className="flex text-lg font-semibold">
                    <button
                        className={twMerge(
                            'flex-1 rounded-br-xl rounded-tl-xl bg-primary-500 py-2',
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
                            'flex-1 rounded-bl-xl rounded-tr-xl bg-primary-500',
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
                    {isCommentScreen ? (
                        <ProfileComments user={user} />
                    ) : (
                        <ProfilePosts user={user} />
                    )}
                </div>
            </Wrapper>
        </>
    ) : (
        <>{msg}</>
    )
}
