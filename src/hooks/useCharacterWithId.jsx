import { useMemo } from 'react'
import { useCharacters } from '../contexts/CharactersContext'

const useCharacterWithId = (id) => {
  const { characters } = useCharacters()

  const character = useMemo(() => {
    return characters.get(id) ?? null
  }, [id, characters])

  return character
}

export { useCharacterWithId }
