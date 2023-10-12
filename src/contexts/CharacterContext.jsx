import {
    createContext,
    useMemo,
    useContext
} from 'react'
import { useForms } from './FormsContext'

const CharactersContext = createContext()

const CharacterProvider = (props) => {

    const { character } = props
    const { forms } = useForms()

    const value = useMemo(() => ({
        defaultForm: forms.get(character.defaultForm),
        characterForms: character.forms.map(formId => forms.get(formId)),
        character
    }), [
        forms,
        character
    ])

    return <CharactersContext.Provider value={value} {...props} />
}

const useCharacter = () => {
    const context = useContext(CharactersContext)
    if (!context) {
        throw new Error('Invalid use of useCharacter, CharacterProvider must be defined in parent hierarchy')
    }
    return context
}


export { CharacterProvider, useCharacter }