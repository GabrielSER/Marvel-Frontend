import { jwtDecode } from 'jwt-decode'
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback
} from 'react'
import { useMarvel, httpMethod } from '../hooks/useMarvel'
import { useNavigate } from 'react-router-dom'

const UserRole = {
  ADMIN: 'admin',
  PLAYER: 'player'
}

const marvelToken = 'marvel_token'

const getToken = () => sessionStorage.getItem(marvelToken)

const setToken = (authToken) => sessionStorage.setItem(marvelToken, authToken)

const removeToken = () => sessionStorage.removeItem(marvelToken)

const UserContext = createContext()

const initialState = {
  user: undefined,
  showAnimation: undefined,
  isLoggedIn: false,
  isAdmin: undefined,
  isPlayer: undefined
}

const UserProvider = (props) => {
  const navigate = useNavigate()
  const { query, loading } = useMarvel()

  const [state, setState] = useState(initialState)
  const [jwtBody, setJwtBody] = useState()

  const logout = useCallback(() => {
    removeToken()
    setState(initialState)
    setJwtBody(undefined)
  }, [setState, setJwtBody])

  const signIn = useCallback(
    async (asLogin) => {
      try {
        const token = getToken()
        if (!token) {
          throw Error('Token not set')
        }
        const jwtBody = jwtDecode(token)
        setJwtBody(jwtBody)
        const userId = jwtBody.id
        if (!userId) {
          throw Error('User id not available on the jwt body')
        }
        const user = await query('/users/' + userId)
        const isPlayer = jwtBody.roles.includes(UserRole.PLAYER) ?? false
        const isAdmin = jwtBody.roles.includes(UserRole.ADMIN) ?? false
        setState((previous) => ({
          ...previous,
          showAnimation: asLogin ? true : previous.showAnimation,
          isLoggedIn: true,
          isAdmin,
          isPlayer,
          user
        }))
      } catch (error) {
        logout()
        throw error
      }
    },
    [setJwtBody, query, setState, logout]
  )

  const login = useCallback(
    async (email, password) => {
      const { token } = await query('/users/login', {
        method: httpMethod.POST,
        body: {
          email,
          password
        }
      })
      setToken(token)
      setJwtBody(jwtDecode(token))
      await signIn(true)
    },
    [query, setJwtBody, signIn]
  )

  const register = useCallback(
    async (user) => {
      await query('/users/', {
        method: httpMethod.POST,
        body: user
      })
      await login(user.email, user.password)
    },
    [query, login]
  )

  const setShowAnimation = useCallback(
    (showAnimation) => {
      setState((previous) => ({ ...previous, showAnimation }))
    },
    [setState]
  )

  // Auto signIn on page load, send to login if no user or outdated token
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await signIn()
      } catch (error) {
        navigate('/login')
      }
    }
    fetchUser()
  }, [signIn, navigate])

  const value = useMemo(() => {
    return {
      ...state,
      loading,
      logout,
      signIn,
      login,
      register,
      setShowAnimation
    }
  }, [
    state,
    loading,
    jwtBody,
    logout,
    signIn,
    login,
    register,
    setShowAnimation
  ])

  return (
    <UserContext.Provider
      value={value}
      {...props}
    />
  )
}

const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error(
      'Invalid use of useUser, UserContext must be defined in parent hierarchy'
    )
  }
  return context
}

export { UserContext, UserProvider, useUser, getToken, setToken }
