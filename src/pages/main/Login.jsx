import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UIButton from '../ui/UIButton'
import clsx from 'clsx'
import { useUser } from '../../contexts/UserContext'
import UIInput from '../ui/UIInput'
import Circular from '../ui/Circular'
import LazyImage2 from '../ui/LazyImage2'
import ComicBackground from '../ui/ComicBackground'

const avatar = 'https://i.ibb.co/C6mByJ7/spiderman.jpg'
const avatar2 = 'https://i.ibb.co/dp7NJjf/iron-man.jpg'
const avatar3 = 'https://i.ibb.co/wLmMXr1/deadpool.jpg'
const avatar4 = 'https://i.ibb.co/8rrzsKJ/rogue.png'
const avatar5 = 'https://i.ibb.co/sRzMSvw/emma-frost.jpg'
const avatar6 = 'https://i.ibb.co/Rh98WBD/moon-knight.png'
const avatar7 = 'https://i.ibb.co/4pbWXGB/venom.webp'
const avatar8 = 'https://i.ibb.co/4p9pJWN/werewolf-by-night.webp'
const avatar9 = 'https://i.ibb.co/HC3YG4Q/cap.jpg'
const avatar10 = 'https://i.ibb.co/BVB27dZ/daredevil.jpg'
const avatar11 = 'https://i.ibb.co/ZJz8305/hulk.jpg'
const avatar12 = 'https://i.ibb.co/vDxpswS/wolverine.jpg'
const avatar13 = 'https://i.ibb.co/W46dBY5G/id0-c42792-u1.webp'
const avatar14 = 'https://i.ibb.co/5X5c5ktf/s-l225.jpg'
const avatar15 = 'https://i.ibb.co/zTw0fvr9/legobp.jpg'
const avatar16 = 'https://i.ibb.co/3yW7bHnM/Lego-Fortnite-Cable.webp'
const avatar17 = 'https://i.ibb.co/Dg56pcfJ/agentvenom.webp'
const avatar18 = 'https://i.ibb.co/XN54xKJ/Kitty.png'

const avatars = [
  avatar,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18
]

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  username: '',
  photo: avatars[0],
  bithdate: ''
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
  const { src, selected, onClick } = props

  return (
    <Circular
      className={clsx('w-10 border-2', selected && 'border-primary')}
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

  const [passwordMismatch, setPasswordMismatch] = useState(false)

  const [passwordError, setPasswordError] = useState(false)

  const [dbError, setdbError] = useState(false)

  const [dbTextError, setdbTextError] = useState('Database Error')

  const imagePlaceholder = (
    <div className='w-full h-full flex flex-col items-center justify-center font-marvel text-white text-7xl bg-red-600'>
      <span className='uppercase'>MARVEL RPG</span>
    </div>
  )

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])

  const loginClick = useCallback(async () => {
    const { email, password } = state
    try {
      await login(email, password)
      setState(initialState)
    } catch (error) {
      console.error(error)
      setdbTextError(error.message)
      setdbError(true)
    }
  }, [state, login, signIn])

  const registerClick = useCallback(async () => {
    if (state.password !== state.confirmPassword) {
      setPasswordMismatch(true)
      return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!passwordRegex.test(state.password)) {
      setPasswordError(true)
      return
    }

    try {
      setPasswordError(false)
      setPasswordMismatch(false)
      await register(state)
      setState(initialState)
    } catch (error) {
      console.error(error)
      setdbTextError(error.message)
      setdbError(true)
    }
  }, [state, login, signIn])

  const handleConfirmPasswordChange = useCallback((e) => {
    const confirmPassword = e.target ? e.target.value : ''
    setState((prevState) => ({ ...prevState, confirmPassword }))
    setPasswordMismatch(false)
  }, [])

  return (
    <ComicBackground>
      <section className='min-h-screen flex items-center justify-center'>
        <div className='dark-box flex shadow-lg max-w-3xl p-5 items-center'>
          <div
            className='flex flex-col lg:w-1/2 px-8 lg:px-16 items-center gap-4 text-xs text-light'
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                if (!registerMode) {
                  loginClick()
                } else {
                  registerClick()
                }
              }
            }}
          >
            <h2 className='font-bold text-2xl text-primary'>
              {registerMode ? 'Register' : 'Log In'}
            </h2>
            {!registerMode && <p>Login to your Marvel RPG Account</p>}
            {registerMode && <p>Create your Marvel RPG Account</p>}
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

            {registerMode && (
              <>
                <TextInput
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  type='password'
                  state={state}
                  setState={setState}
                  onChange={handleConfirmPasswordChange}
                />
                {passwordMismatch && (
                  <p className='text-red-500'>Passwords do not match.</p>
                )}
                {passwordError && (
                  <p className='text-red-500'>
                    Passwords must be at least 8 characters and contain numbers
                    and capital letters
                  </p>
                )}
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
                <label className='flex w-full justify-center'>
                  Select your avatar
                </label>
                <div className='flex flex-wrap gap-4 justify-center items-center'>
                  {avatars.map((src, index) => (
                    <AvatarIcon
                      key={index}
                      src={src}
                      onClick={() => setState({ ...state, photo: src })}
                      selected={src === state.photo}
                    />
                  ))}
                </div>
              </>
            )}
            {registerMode && (
              <UIButton
                className='p-2 w-full'
                onClick={registerClick}
              >
                Register
              </UIButton>
            )}
            {dbError && registerMode && (
              <p className='text-red-500'>{dbTextError}</p>
            )}
            {dbError && !registerMode && (
              <p className='text-red-500'>{dbTextError}</p>
            )}
            {!registerMode && (
              <>
                <UIButton
                  className='p-2 w-full'
                  onClick={loginClick}
                >
                  Log In
                </UIButton>

                <a className='text-primary'> Forgot your password?</a>
              </>
            )}

            <hr className='text-light-2 w-full'></hr>
            {!registerMode && (
              <>
                <p>You don't have an account?</p>
                <UIButton
                  className='p-2 w-full'
                  onClick={() => {
                    setRegisterMode(true)
                    setdbError(false)
                  }}
                >
                  Register
                </UIButton>
              </>
            )}
            {registerMode && (
              <>
                <p>Already have an account?</p>
                <UIButton
                  className='p-2 w-full'
                  onClick={() => {
                    setRegisterMode(false)
                    setdbError(false)
                  }}
                >
                  Log In
                </UIButton>
              </>
            )}
          </div>

          <div className='lg:block hidden w-1/2'>
            <LazyImage2
              class='rounded-2xl'
              src='https://i.ibb.co/0Gs0f3t/rogue.png'
              placeholder={imagePlaceholder}
            />
          </div>
        </div>
      </section>
    </ComicBackground>
  )
}

export default Login
