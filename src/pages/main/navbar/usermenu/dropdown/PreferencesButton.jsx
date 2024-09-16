import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@contexts/UserContext'
import MenuButton from './MenuButton'
import { MdSettings } from 'react-icons/md'

const PreferencesButton = () => {
    const { isLoggedIn } = useUser()
    const navigate = useNavigate()

    const onClick = useCallback(() => {
        navigate('/preferences')
    }, [navigate])

    if (!isLoggedIn) return null

    return (
        <MenuButton onClick={onClick}>
            <MdSettings /> Preferences
        </MenuButton>
    )
}

export default PreferencesButton