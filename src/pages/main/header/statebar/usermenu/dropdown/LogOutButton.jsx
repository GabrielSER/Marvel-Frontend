import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@contexts/UserContext'
import MenuButton from './MenuButton'
import { BiLogOut } from 'react-icons/bi'

const LogOutButton = () => {
    const { logout } = useUser()
    const navigate = useNavigate()

    const logoutClick = useCallback(() => {
        logout()
        navigate('/login')
    }, [logout, navigate])

    return (
        <MenuButton onClick={logoutClick}>
            <BiLogOut /> Log Out
        </MenuButton>
    )
}

export default LogOutButton