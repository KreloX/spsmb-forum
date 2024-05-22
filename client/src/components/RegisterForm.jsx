import IconInput from './IconInput'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { confirmIcon, keyIcon, mailIcon, userIcon } from '../constants'

export default () => {
    const { success } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitForm = (formData) => {
        dispatch(registerUser(formData))
    }

    useEffect(() => {
        if (success) {
            navigate('/')
        }
    }, [success, navigate])

    return (
        <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
            <IconInput
                d={userIcon}
                id="username"
                autoComplete="username"
                placeholder="Username"
                register={{ ...register('username') }}
            />
            <IconInput
                d={mailIcon}
                id="email"
                autoComplete="email"
                placeholder="Email"
                register={{ ...register('email') }}
            />
            <IconInput
                d={keyIcon}
                id="password"
                placeholder="Password"
                register={{ ...register('password') }}
            />
            <IconInput
                d={confirmIcon}
                id="password"
                placeholder="Confirm password"
                register={{ ...register('confirmPassword') }}
            />
            <button type="submit" className="m-auto flex w-3/5 justify-center">
                <b className="w-full rounded-xl bg-primary-500 px-3 py-2 text-light-100 shadow-md hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:scale-95 dark:text-light">
                    Register
                </b>
            </button>
        </form>
    )
}
