import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'
import { useMarvel, httpMethod } from '../Hooks/useMarvel'
import { useCharacters } from './CharactersContext'
import { usePowers } from './PowersContext'

const CharacterContext = createContext()

/**
 * @typedef {import('./CharactersContext').Character} Character
 * @typedef {import('./PowersContext').Power} Power  
 */

/**
 * @typedef CharacterState
 * @property {Power[]} powers
 */
const initialState = {
    powers: []
}

const CharacterProvider = (props) => {

    /**
     * @type {{character: Character}}
     */
    const { character } = props

    /**
     * @type {[ state: CharacterState ]}
     */
    const [state, setState] = useState()
    const { characters } = useCharacters()
    const { powers } = usePowers()

    useEffect(() => {
        setState({
            ...state,
            powers: character.powers.map(powerId => powers.get(powerId))
        })
    }, [character, powers])

    const value = useMemo(() => ({
        character,
        ...state
    }), [
        character,
        state
    ])

    return <CharacterContext.Provider value={value} {...props} />
}

const useCharacter = () => {
    const context = useContext(CharacterContext)
    if (!context) {
        throw new Error('Invalid use of useCharacter, CharacterProvider must be defined in parent hierarchy')
    }
    return context
}


export { CharacterProvider, useCharacter }