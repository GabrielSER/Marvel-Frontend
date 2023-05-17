import { useParams, useNavigate } from 'react-router-dom'
import { CharacterProvider, useCharacter } from '../../contexts/CharacterContext'
import { useCharacterWithNormalizedName } from '../../hooks/useCharacterWithNormalizedName'
import clsx from 'clsx'
import { useEffect } from 'react'

const CharacterDetail = () => {

    const { normalized } = useParams()

    const navigate = useNavigate()
    const character = useCharacterWithNormalizedName(normalized)

    useEffect(() => {
        if (character == null) {
            navigate('/not-found')
        }
    }, [character])

    if (character == null) return null

    return (
        <CharacterProvider character={character}>
            <div className={clsx('flex flex-col w-full h-full')}>
                <div>
                    {character.name}
                </div>
            </div>
        </CharacterProvider>
    )
}

export default CharacterDetail