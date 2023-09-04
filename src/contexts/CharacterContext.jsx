import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { usePowers } from './PowersContext'

const CharactersContext = createContext()

const CharacterProvider = (props) => {

    const { powers } = usePowers()
    const { character } = props
    const [characterPowers, setCharacterPowers] = useState([])

    useEffect(() => {
        setCharacterPowers(character.powers.map(powerId => powers.get(powerId)))
    }, [character, powers])

    const value = useMemo(() => ({
        character,
        characterPowers
    }), [
        character,
        characterPowers
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