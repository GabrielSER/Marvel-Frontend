import clsx from 'clsx'
import unknownUser from '../../../assets/images/unknown_user.jpg'
import { useUser } from '../../../contexts/UserContext'
import Circular from '../../ui/Circular'
import { useCallback, useState } from 'react'
import Input from '../../ui/Input'
import PrimaryInput from '../../ui/PrimaryInput'
import PrimaryButton from '../../ui/PrimaryButton'

const initialState = {
    email: '',
    password: ''
}

const UserDropDown = (props) => {

    const { setActive } = props

    const { login, signIn } = useUser()

    const [state, setState] = useState(initialState)

    const loginClick = useCallback(async () => {
        const { email, password } = state
        try {
            await login(email, password)
            await signIn()
            setState(initialState)
            setActive(false)
        }
        catch (error) {
            console.error(error)
        }
    }, [state, login, setActive, signIn])

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'absolute',
                'z-50',
                'w-80',
                'bg-light',
                'border border-light',
                'shadow-lg',
                'rounded-md',
                'right-0 top-[120%]',
                'transition-all duration-500',
                'p-2',
                'overflow-hidden',
                'gap-2',
                'font-montserrat'
            )}
            onKeyDown={event => {
                if (event.key === 'Enter') {
                    loginClick()
                }
            }}
        >
            <label>E-mail</label>
            <PrimaryInput
                name='email'
                className='w-full'
                state={state}
                setState={setState}
            />
            <label>Password</label>
            <PrimaryInput
                name='password'
                className='w-full'
                type='password'
                state={state}
                setState={setState}
            />
            <PrimaryButton onClick={loginClick}>
                Log In
            </PrimaryButton>
        </div>
    )
}

const UserLogo = () => {

    const { user } = useUser()

    const [active, setActive] = useState(false)

    return (
        <div className='flex relative'>
            <Circular
                className='w-10 border-2 border-primary'
                onClick={() => setActive(!active)}
            >
                <img
                    className='w-full h-full object-cover'
                    src={user?.photo ?? unknownUser}
                    alt='User photo'
                />

            </Circular>
            {
                active &&
                <UserDropDown setActive={setActive} />
            }
        </div>
    )
}

export default UserLogo