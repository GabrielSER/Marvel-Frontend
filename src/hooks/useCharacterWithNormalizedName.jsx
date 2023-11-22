
import { useMemo } from 'react'
import { useCharacters } from '../contexts/CharactersContext'

const useCharacterWithNormalizedName = (normalized) => {

    const { charactersByNormalized, loading } = useCharacters()

    const character = useMemo(() => {
        return charactersByNormalized.get(normalized) ?? null
    }, [loading, normalized, charactersByNormalized])

    return {character, loading}
}

export { useCharacterWithNormalizedName }