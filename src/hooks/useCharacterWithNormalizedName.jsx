
import { useMemo } from 'react'
import { useCharacters } from '../contexts/CharactersContext'

const useCharacterWithNormalizedName = (normalized) => {

    const { charactersByNormalized } = useCharacters()

    const character = useMemo(() => {
        return charactersByNormalized.get(normalized) ?? null
    }, [normalized, charactersByNormalized])

    return character
}

export { useCharacterWithNormalizedName }