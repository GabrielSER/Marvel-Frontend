import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'
import { useMarvel, httpMethod } from '../Hooks/useMarvel'

const CharactersContext = createContext()

// Jsdoc
/**
 * @typedef Character
 * @property {string} _id
 * @property {string} name
 * @property {string[]} powers
 */

/**
 * @typedef CharactersState
 * @property {Map<string, Character>} characters
 */
const initialState = {
    characters: new Map()
}

const CharactersProvider = (props) => {

    /**
     * @type {[ state: CharactersState ]}
     */
    const [state, setState] = useState(initialState)
    const { query, loading } = useMarvel()

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const charactersArray = await query('/characters')
                const characters = new Map(charactersArray.map(character => [character._id, character]))
                setState({
                    ...state,
                    characters
                })
            }
            catch (error) {
                console.error('Error loading characters')
            }
        }
        loadCharacters()
    }, [])

    const updateCharacter = useCallback(async (character) => {
        const updatedCharacter = await query(`/characters/${character._id}`, {
            method: httpMethod.PUT,
            body: character
        })
        state.characters[updateCharacter._id] = updatedCharacter
        setState({ ...state })
    }, [query, state])

    const value = useMemo(() => ({
        ...state,
        loading,
        updateCharacter
    }), [
        state,
        loading,
        updateCharacter
    ])

    return <CharactersContext.Provider value={value} {...props} />
}

const useCharacters = () => {
    const context = useContext(CharactersContext)
    if (!context) {
        throw new Error('Invalid use of useCharacters, CharactersProvider must be defined in parent hierarchy')
    }
    return context
}


export { CharactersProvider, useCharacters }