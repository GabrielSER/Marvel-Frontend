import {
    createContext,
    useState,
    useMemo,
    useContext,
} from 'react'
import { useCharacter } from './CharacterContext'
import { useEffect } from 'react'

const CharacterDetailContext = createContext()

const CharacterDetailProvider = (props) => {

    const { defaultForm } = useCharacter()
    const [selectedForm, setSelectedForm] = useState(defaultForm)

    useEffect(() => {
        if (!selectedForm) {
            setSelectedForm(defaultForm)
        }
    }, [selectedForm, defaultForm, setSelectedForm])

    const value = useMemo(() => ({
        selectedForm,
        setSelectedForm
    }), [
        selectedForm,
        setSelectedForm
    ])

    return <CharacterDetailContext.Provider value={value} {...props} />
}

const useCharacterDetail = () => {
    const context = useContext(CharacterDetailContext)
    if (!context) {
        throw new Error('Invalid use of useCharacterDetail, CharacterDetailProvider must be defined in parent hierarchy')
    }
    return context
}

export { CharacterDetailProvider, useCharacterDetail }