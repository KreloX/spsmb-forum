import Logo from '../logo.svg?react'
import A from './A'

export default () => (
    <>
        <div className="[&>a:hover]:text-mixed-600 dark:[&>a:hover]:text-light-500 grid h-fit flex-1 justify-center">
            <A href="https://github.com/KreloX/spsmb-forum">Source</A>
        </div>
        <Logo className="pointer-events-none order-first mb-4 size-16 w-full self-center sm:order-none sm:flex-1" />
        <div className="[&>a:hover]:text-mixed-600 dark:[&>a:hover]:text-light-500 grid h-fit flex-1 justify-center gap-2">
            <A href="https://github.com/CornChasm">Kornel Kazmierczak</A>
            <A href="https://github.com/MartinCZE1">Martin Hercík</A>
            <A href="https://github.com/KreloX">Kryštof Martinec</A>
        </div>
    </>
)
