import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'
import { useMarvel, httpMethod } from '../hooks/useMarvel'
import { normalizeName } from '../util/characterUtil'

const CharactersContext = createContext()

/**
 * @typedef Character
 * @property {string} _id
 * @property {string} name
 * @property {string[]} powers
 */

/**
 * @typedef CharactersState
 * @property {Map<string, Character>} characters
 * @property {Map<string, Character>} charactersByNormalized
 */
const initialState = {
    characters: new Map(),
    charactersByNormalized: new Map()
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
                const characters = new Map(charactersArray.map(character =>
                    [character._id, character]
                ))
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

    useEffect(() => {
        const characters = Array.from(state.characters.values())
        const charactersByNormalized = new Map(characters.map(character =>
            [normalizeName(character.name), character]
        ))
        setState({
            ...state,
            charactersByNormalized
        })
    }, [state.characters])

    const updateCharacter = useCallback(async (character) => {
        const updatedCharacter = await query(`/characters/${character._id}`, {
            method: httpMethod.PUT,
            body: character
        })
        state.characters.set(updatedCharacter._id, updatedCharacter)
        setState({ ...state })
    }, [query, state.characters])

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