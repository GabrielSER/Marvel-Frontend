import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UIButton from "../ui/UIButton"
import clsx from "clsx"
import { useUser } from "../../contexts/UserContext"
import UIInput from "../ui/UIInput"
import Circular from "../ui/Circular"

import avatar from '../../assets/images/avatars/spiderman.jpg'
import avatar2 from '../../assets/images/avatars/iron_man.jpg'
import avatar3 from '../../assets/images/avatars/deadpool.jpg'
import avatar4 from '../../assets/images/avatars/rogue.png'
import avatar5 from '../../assets/images/avatars/emma_frost.jpg'
import avatar6 from '../../assets/images/avatars/moon_knight.png'
import avatar7 from '../../assets/images/avatars/venom.webp'
import avatar8 from '../../assets/images/avatars/werewolf_by_night.webp'

const avatars = [
    avatar,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8
]

const initialState = {
    email: '',
    password: '',
    name: '',
    username: '',
    photo: avatars[0],
    birthday: ''
}

const TextInput = (props) => {
    return (
        <UIInput
            className='w-full'
            {...props}
        />
    )
}

const AvatarIcon = (props) => {

    const { src, selected, onClick} = props

    return (
        <Circular
            className={clsx(
                'w-10 border-2',
                selected && 'border-primary'
                )}
            onClick={onClick}
        >
            <img
                className='w-full h-full object-cover'
                src={src}
                alt='avatar'
            />
        </Circular>
    )
}

const Login = () => {

    const navigate = useNavigate()

    const { login, signIn, isLoggedIn, register } = useUser()

    const [state, setState] = useState(initialState)

    const [registerMode, setRegisterMode] = useState(false)


    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])

    const loginClick = useCallback(async () => {
        const { email, password } = state
        try {
            await login(email, password)
            await signIn()
            setState(initialState)
            navigate('/')
        }
        catch (error) {
            console.error(error)
        }
    }, [state, login, signIn])

    const registerClick = useCallback(async () => {
       
        try {
            await register(state)
            await signIn()
            setState(initialState)
            navigate('/')
        }
        catch (error) {
            console.error(error)
        }
    }, [state, login, signIn])


    return (
        <section class="min-h-screen flex items-center justify-center">
            <div class="dark-box flex shadow-lg max-w-3xl p-5 items-center">
                <div class="flex flex-col md:w-1/2 px-8 md:px-16 items-center gap-4 text-xs text-light"
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            loginClick()
                        }
                    }}>
                    <h2 class="font-bold text-2xl text-primary">{registerMode ? "Register" : "Log In"}</h2>
                    {
                        !registerMode &&
                        <p >Login to your Marvel RPG Account</p>
                    }
                    {
                        registerMode &&
                        <p >Create your Marvel RPG Account</p>
                    }
                    <TextInput
                        name='email'
                        placeholder='E-mail'
                        state={state}
                        setState={setState}
                    />
                    <TextInput
                        name='password'
                        placeholder='Password'
                        type='password'
                        state={state}
                        setState={setState}
                    />
                    {
                        registerMode &&
                        <>
                            <TextInput
                                name='confirmpassword'
                                placeholder='Confirm Password'
                                type='password'
                                state={state}
                                setState={setState}
                            />
                            <TextInput
                                name='name'
                                placeholder='Name'
                                state={state}
                                setState={setState}
                            />
                            <TextInput
                                name='username'
                                placeholder='Username'
                                state={state}
                                setState={setState}
                            />
                            <TextInput
                                name='birthdate'
                                type='date'
                                state={state}
                                setState={setState}
                            />
                            <label className="flex w-full justify-center">
                                Select your avatar
                            </label>
                            <div className="flex flex-wrap gap-4 justify-center items-center">
                                {
                                    avatars.map((src, index) => 
                                    <AvatarIcon 
                                    src={src}
                                    onClick={() => setState({...state, photo: src})}
                                    selected={src === state.photo}
                                    />
                                    )
                                }
                            </div>
                        </>
                    }
                    {
                        registerMode &&
                        <UIButton className="p-2 w-full" onClick={registerClick}>
                            Register
                        </UIButton>
                    }
                    {
                        !registerMode &&
                        <>
                            <UIButton className="p-2 w-full" onClick={loginClick}>
                                Log In
                            </UIButton>

                            <a className='text-primary'> Forgot your password?</a>
                        </>
                    }

                    <hr className='text-light-2 w-full'></hr>
                    {
                        !registerMode &&
                        <>
                            <p>Don't have an account?</p>
                            <UIButton className="p-2 w-full" onClick={() => setRegisterMode(true)}>
                                Register
                            </UIButton>
                        </>
                    }
                    {
                        registerMode &&
                        <>
                            <p>Already have an account?</p>
                            <UIButton className="p-2 w-full" onClick={() => setRegisterMode(false)}>
                                Log In
                            </UIButton>
                        </>
                    }

                </div>

                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="https://i.ibb.co/0Gs0f3t/rogue.png" />
                </div>
            </div>
        </section>
    )
}

export default Login