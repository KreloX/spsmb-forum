import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default () => {
  const [isCommentScreen, setIsCommentScreen] = useState(false)
  return (
    <>
      <div className="dark:bg-mixed-800 bg-light-100 mx-auto flex max-w-3xl max-h-96 rounded-tr-xl rounded-xl">
      <div className="rounded-full min-h-32 min-w-32 dark:bg-mixed-900 bg-light-300 m-8 border-4 border-primary-500 border-dashed"></div>
      <div className="flex flex-col mt-10">
        <div className=" text-3xl">Kornel Kazmierczak</div>
        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore aliquid quasi fuga debitis voluptatibus, placeat alias aspernatur libero minus est, soluta excepturi deleniti repudiandae doloremque rem. Sapiente, non voluptates.</div>
      </div>
    </div>
    <div className="dark:bg-mixed-800 bg-light-100 mx-auto flex flex-col max-w-3xl max-h-96 rounded-tr-xl rounded-xl mt-6">
      <div className="flex text-lg font-semibold">
    <button className={twMerge(
                        'bg-primary-500 flex-1 rounded-tl-xl rounded-br-xl px-3',
                        isCommentScreen
                            ? ' hover:bg-primary-400 text-light-100 dark:text-light'
                            : ' cursor-default bg-transparent'
                    )}
      onClick={() => setIsCommentScreen(false)}>Posts</button>
      <button className={twMerge(
                        'bg-primary-500 flex-1 rounded-bl-xl rounded-tr-xl px-3',
                        isCommentScreen
                            ? ' cursor-default bg-transparent'
                            : ' hover:bg-primary-400 text-light-100 dark:text-light'
                    )}
      onClick={() => setIsCommentScreen(true)}>Comments</button>
    </div>
      <div>
        Post
        <div>
          Post Name 
          <div>
            Post Text 
            <div>
              Post Date
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}