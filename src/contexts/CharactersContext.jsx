import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback
} from 'react'
import { useMarvel, httpMethod } from '@hooks/useMarvel'
import { normalizeString } from '@util/stringUtil'

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
  charactersByNormalized: new Map(),
  indexing: true
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
        const characters = new Map(
          charactersArray.map((character) => [character._id, character])
        )
        setState((previous) => ({
          ...previous,
          characters,
          indexing: true
        }))
      } catch (error) {
        console.error('Error loading characters')
      }
    }
    loadCharacters()
  }, [query])

  useEffect(() => {
    if (state.characters.size === 0) {
      return
    }
    const characters = Array.from(state.characters.values())
    const charactersByNormalized = new Map(
      characters.map((character) => [normalizeString(character.name), character])
    )
    setState((previous) => ({
      ...previous,
      charactersByNormalized,
      indexing: false
    }))
  }, [state.characters])

  const updateCharacter = useCallback(async (character) => {
    const updatedCharacter = await query(`/characters/${character._id}`, {
      method: httpMethod.PUT,
      body: character
    })
    const characters = new Map(state.characters)
    characters.set(updatedCharacter._id, updatedCharacter)
    setState(previous => ({
      ...previous,
      characters
    }))
  }, [query, state, setState])

  const value = useMemo(
    () => ({
      ...state,
      loading: loading || state.indexing,
      updateCharacter
    }),
    [state, loading, updateCharacter]
  )

  return (
    <CharactersContext.Provider
      value={value}
      {...props}
    />
  )
}

const useCharacters = () => {
  const context = useContext(CharactersContext)
  if (!context) {
    throw new Error(
      'Invalid use of useCharacters, CharactersProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { CharactersProvider, useCharacters }
