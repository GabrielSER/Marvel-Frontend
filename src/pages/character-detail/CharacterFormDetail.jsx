import clsx from 'clsx'
import { useCharacter } from '../../contexts/CharacterContext'
import { FormProvider } from '../../contexts/FormContext'
import FormTabBar from './FormTabBar'
import LazyImage from '../ui/LazyImage'
import CharacterStats from './CharacterStats'
import CharacterAbilities from './CharacterAbilities'
import CharacterPowers from './CharacterPowers'
import { useState } from 'react'
import { useCharacterDetail } from '../../contexts/CharacterDetailContext'
import CharacterSkills from './CharacterSkills'
import Comicbook from '../ui/ComicPanel'
import ComicPanel from '../ui/ComicPanel'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import CharacterImage from './CharacterImage'
import CharacterLogo from './CharacterLogo'
import CharacterName from './CharacterName'
import CharacterBio from './CharacterBio'
import ArmorCost from './ArmorCost'


const Section = (props) =>
  <div className='flex flex-col md:flex-row justify-center gap-4 overflow-hidden'
    {...props}
  />

const Column = (props) => {

  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <div
      className={clsx(
        'flex flex-col',
        'gap-4',
        'p-4',
        'w-full',
        'items-center',
        className
      )}
      {...properties}
    />
  )
}

const CharacterFormDetail = () => {

  const { selectedForm } = useCharacterDetail()
  const { character } = useCharacter()

  if (selectedForm == null) return null

  return (
    <FormProvider form={selectedForm}>
      <div className={clsx('flex flex-col w-full justify-center p-4 md:p-5')}>
        <CharacterLogo />
        <Section>
          <Column className='w-full md:w-1/3 shrink-0'>
            <CharacterImage />
            <CharacterSkills />
          </Column>
          <Column>
            <CharacterName />
            <ArmorCost/>
            <CharacterStats />
            <CharacterAbilities />
          </Column>
        </Section>
          <CharacterBio />
          <CharacterPowers />
      </div>
    </FormProvider>
  )
}

export default CharacterFormDetail