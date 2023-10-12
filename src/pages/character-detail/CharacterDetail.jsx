import { useParams, useNavigate } from 'react-router-dom'
import { CharacterProvider, useCharacter } from '../../contexts/CharacterContext'
import { useCharacterWithNormalizedName } from '../../hooks/useCharacterWithNormalizedName'
import clsx from 'clsx'
import { useEffect } from 'react'
import LazyImage from '../ui/LazyImage'
import CharacterPower from './CharacterPower'
import CharacterPowers from './CharacterPowers'
import FormTabBar from './FormTabBar'
import { FormProvider } from '../../contexts/FormContext'
import CharacterAbilities from './CharacterAbilities'
import CharacterStats from './CharacterStats'
import { useState } from 'react'
import CharacterFormDetail from './CharacterFormDetail'
import { CharacterDetailProvider } from '../../contexts/CharacterDetailContext'

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
            <CharacterDetailProvider>
                {
                    character.forms.length !== 0 &&
                    <FormTabBar/>
                }
                <CharacterFormDetail />
            </CharacterDetailProvider>
        </CharacterProvider>
    )
}

export default CharacterDetail