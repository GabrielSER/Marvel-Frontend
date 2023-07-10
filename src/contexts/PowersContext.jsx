import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'
import { useMarvel, httpMethod } from '../hooks/useMarvel'
import { useCharacters } from './CharactersContext'

const PowersContext = createContext()

// Jsdoc
/**
 * @typedef Power
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef PowersState
 * @property {{Map<string, Power>}} powers
 */
const initialState = {
    powers: new Map()
}

const PowersProvider = (props) => {

    /**
     * @type {[ state: PowersState ]}
     */
    const [state, setState] = useState(initialState)
    const { query, loading } = useMarvel()
    const { characters, updateCharacter } = useCharacters()

    useEffect(() => {
        const loadPowers = async () => {
            try {
                const powers = await query('/powers')
                setState({
                    ...state,
                    powers
                })
            }
            catch (error) {
                console.error('Error loading powers')
                console.error(error)
            }
        }
        loadPowers()
    }, [])

    const addPowerToCharacter = useCallback(async (power) => {
        const character = characters.get(power.character)
        console.log(characters)
        if (!character) {
            alert('No existe ese character')
            return
        }
        const createdPower = await query('/powers', {
            method: httpMethod.POST,
            body: power
        })
        console.log('created power', createdPower)
        state.powers.push(createdPower)
        setState({ ...state })
        console.log('adding power to ' + character.name)
        character.powers.push(createdPower._id)
        updateCharacter(character)
    }, [state, query, characters, updateCharacter])

    const getPowerbyId = (id) => {
        return state.powers.find(power => power._id === id)
    }

    const value = useMemo(() => ({
        ...state,
        loading,
        getPowerbyId,
        addPowerToCharacter,
    }), [
        state,
        loading,
        getPowerbyId,
        addPowerToCharacter
    ])

    return <PowersContext.Provider value={value} {...props} />
}

const usePowers = () => {
    const context = useContext(PowersContext)
    if (!context) {
        throw new Error('Invalid use of usePowers, PowersProvider must be defined in parent hierarchy')
    }
    return context
}


export { PowersProvider, usePowers }
