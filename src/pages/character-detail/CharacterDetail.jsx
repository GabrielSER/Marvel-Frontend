import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApplication } from '@contexts/ApplicationContext'
import { CharacterProvider } from '@contexts/CharacterContext'
import { CharacterDetailProvider } from '@contexts/CharacterDetailContext'
import { useCharacterWithNormalizedName } from '@hooks/useCharacterWithNormalizedName'
import FormTabBar from './FormTabBar'
import CharacterFormDetail from './CharacterFormDetail'

const CharacterDetail = () => {
  const navigate = useNavigate()
  const { characterNormalized } = useParams()
  const { character, loading } = useCharacterWithNormalizedName(characterNormalized)
  const { setLoading } = useApplication()

  useEffect(() => {
    setLoading(true)
  }, [])

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
        {character.forms.length !== 0 && <FormTabBar />}
        <CharacterFormDetail />
      </CharacterDetailProvider>
    </CharacterProvider>
  )
}

export default CharacterDetail
