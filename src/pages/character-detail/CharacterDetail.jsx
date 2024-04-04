import { useParams, useNavigate } from 'react-router-dom'
import { CharacterProvider } from '../../contexts/CharacterContext'
import { useCharacterWithNormalizedName } from '../../hooks/useCharacterWithNormalizedName'
import { useEffect } from 'react'
import FormTabBar from './FormTabBar'
import CharacterFormDetail from './CharacterFormDetail'
import { CharacterDetailProvider } from '../../contexts/CharacterDetailContext'

const CharacterDetail = () => {

    const navigate = useNavigate()
    const { normalized } = useParams()
    const { character, loading } = useCharacterWithNormalizedName(normalized)

    useEffect(() => {
        if (loading) return
        if (character == null) {
            navigate('/not-found')
        }
    }, [navigate, character, loading])

    if (character === null || character === undefined) {
        return null
    }

    return (
        <CharacterProvider character={character}>
            <CharacterDetailProvider>
                {
                    character.forms.length !== 0 &&
                    <FormTabBar />
                }
                <CharacterFormDetail />
            </CharacterDetailProvider>
        </CharacterProvider>
    )
}

export default CharacterDetail