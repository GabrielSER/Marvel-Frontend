import { useUser } from '@contexts/UserContext'

const LoggedUsername = () => {
    const { isLoggedIn, user } = useUser()

    if (!isLoggedIn || !user) return null

    return (
        <label className='text-light font-bold'>
            {user.username}
        </label>
    )
}

export default LoggedUsername