import { createContext, useState, useEffect, useContext, useMemo } from 'react'
import { useMarvel, httpMethod } from '../hooks/useMarvel'

const marvelToken = 'marvel_token'
const marvelUser = 'marvel_user'

const getToken = () => sessionStorage.getItem(marvelToken)

const setToken = (authToken) => sessionStorage.setItem(marvelToken, authToken)

const removeToken = () => sessionStorage.removeItem(marvelToken)

const getUserId = () => sessionStorage.getItem(marvelUser)

const setUserId = (userId) => sessionStorage.setItem(marvelUser, userId)

const removeUser = () => sessionStorage.removeItem(marvelUser)

const UserContext = createContext()

const UserProvider = (props) => {

    const [user, setUser] = useState()
    const { query, loading } = useMarvel()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await signIn()
            }
            catch (error) {

            }
        }
        fetchUser()
    }, [])

    const register = async (user) => {
        const createdUser = await query('/users/', {
            method: httpMethod.POST,
            body: user
        })
        setUser(createdUser)
        setUserId(createdUser._id)
    }

    const login = async (email, password) => {
        const { token, userId } = await query('/users/login', {
            method: httpMethod.POST,
            body: {
                email,
                password
            }
        })
        setToken(token)
        setUserId(userId)
    }

    const signIn = async () => {
        try {
            if (!getToken()) {
                throw Error('Token not set')
            }
            const userId = getUserId()
            if (!userId) {
                throw Error('User not set')
            }
            const user = await query('/users/' + userId)
            setUser(user)
            setUserId(user._id)
        }
        catch (error) {
            logout()
            throw error
        }
    }

    const logout = () => {
        removeUser()
        removeToken()
        setUser(undefined)
    }

    const value = useMemo(() => {
        return {
            user,
            loading,
            setUser,
            register,
            login,
            signIn,
            logout
        }
    }, [user])

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