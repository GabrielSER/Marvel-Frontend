import { jwtDecode } from 'jwt-decode'
import { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react'
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

const UserProvider = (props) => {

    const navigate = useNavigate()
    const { query, loading } = useMarvel()

    const [user, setUser] = useState()
    const [jwtBody, setJwtBody] = useState()

    const register = useCallback(async (user) => {
        const createdUser = await query('/users/', {
            method: httpMethod.POST,
            body: user
        })
        setUser(createdUser)
    }, [query])

    const login = useCallback(async (email, password) => {
        const { token } = await query('/users/login', {
            method: httpMethod.POST,
            body: {
                email,
                password
            }
        })
        setToken(token)
        setJwtBody(jwtDecode(token))
    }, [query, setJwtBody])

    const logout = useCallback(() => {
        removeToken()
        setUser(undefined)
        setJwtBody(undefined)
    }, [setUser])

    const signIn = useCallback(async () => {
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
            setUser(user)
        }
        catch (error) {
            logout()
            throw error
        }
    }, [setJwtBody, query, setUser, logout])

    // Auto signIn on page load, send to login if no user or outdated token
    useEffect(() => {
        const fetchUser = async () => {
            try {
                await signIn()
            }
            catch (error) {
                navigate('/login')
            }
        }
        fetchUser()
    }, [signIn, navigate])

    const value = useMemo(() => {
        return {
            user,
            loading,
            isPlayer: jwtBody?.roles.includes(UserRole.PLAYER) ?? false,
            isAdmin: jwtBody?.roles.includes(UserRole.ADMIN) ?? false,
            setUser,
            register,
            login,
            signIn,
            logout
        }
    }, [
        user,
        loading,
        jwtBody,
        setUser,
        register,
        login,
        signIn,
        logout
    ])

    return <UserContext.Provider value={value} {...props} />

}

const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Invalid use of useUser, UserContext must be defined in parent hierarchy')
    }
    return context
}

export { UserContext, UserProvider, useUser, getToken, setToken }