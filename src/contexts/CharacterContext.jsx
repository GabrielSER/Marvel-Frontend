import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'

const CharactersContext = createContext()

const CharacterProvider = (props) => {

    const { character } = props

    const value = useMemo(() => ({
        character
    }), [
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