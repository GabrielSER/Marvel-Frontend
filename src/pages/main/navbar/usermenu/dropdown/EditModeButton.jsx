import { useCallback } from 'react'
import { useUser } from '@contexts/UserContext'
import MenuButton from './MenuButton'
import { useApplication } from '@contexts/ApplicationContext'
import { BiEdit } from 'react-icons/bi'

const EditModeButton = () => {
    const { isAdmin } = useUser()
    const {editMode, setEditMode} = useApplication()

    const onClick = useCallback(() => {
        setEditMode(!editMode)
    }, [editMode, setEditMode])

    if (!isAdmin) return null

    return (
        <MenuButton onClick={onClick}>
            <BiEdit /> {editMode ? 'Turn off edit mode' : 'Turn on edit mode'} 
        </MenuButton>
    )
}

export default EditModeButton