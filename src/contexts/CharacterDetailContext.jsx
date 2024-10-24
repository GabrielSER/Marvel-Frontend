import { createContext, useState, useMemo, useContext, useCallback } from 'react'
import { useCharacter } from '@contexts/CharacterContext'
import { useCharacters } from '@contexts/CharactersContext'

const CharacterDetailContext = createContext()

const CharacterDetailProvider = (props) => {
  const { character } = useCharacter()
  const { updateCharacter } = useCharacters()
  const [selectedForm, setSelectedForm] = useState()

  const update = useCallback((changes) => {
    updateCharacter({ _id: character._id, ...changes })
  }, [character, updateCharacter])

  const value = useMemo(
    () => ({
      character,
      selectedForm,
      setSelectedForm,
      update
    }),
    [
      character,
      selectedForm,
      setSelectedForm,
      update
    ]
  )

  return (
    <CharacterDetailContext.Provider
      value={value}
      {...props}
    />
  )
}

const useCharacterDetail = () => {
  const context = useContext(CharacterDetailContext)
  if (!context) {
    throw new Error(
      'Invalid use of useCharacterDetail, CharacterDetailProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { CharacterDetailProvider, useCharacterDetail }
