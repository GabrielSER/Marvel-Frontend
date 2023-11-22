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
        'w-full',
        'justify-center',
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
      <div className={clsx('flex flex-col w-full justify-center p-4 md:p-10')}>
        <CharacterLogo />
        <Section>
          <Column className='w-full md:w-1/3 shrink-0'>
            <CharacterImage />
            <CharacterSkills />
          </Column>
          <Column className='items-center'>
            <CharacterName />
            <CharacterStats />
            <CharacterAbilities />
          </Column>
        </Section>

        <div className={clsx('flex flex-col p-4 w-90 h-full items-center justify-center')}>
          <div className={clsx('flex flex-col w-100 h-full sm:mx-100 my-10 self-center')}>
            <LazyImage
              src={character.logo}
              alt={character.name}
              className='w-200 h-auto self-center sm:mx-0 mx-5 py-4 hover:scale-105'
              imageClassname='w-full h-auto'
            />
          </div>
          <div className={clsx('flex flex-col sm:flex-row w-full h-full p-4 my-10 sm:ml-20')}>
            <div className={clsx('flex flex-col w-full sm:w-1/3 h-full gap-y-10')}>
              <CharacterImage />
              <CharacterSkills />
            </div>
            <div className={clsx('flex flex-col w-full sm:w-2/3 sm:mx-20 h-full mx-2 ')}>
              <div className='sm:self-start mb-2'>
                <b className='text-2xl font-bold px-2'>
                  <ComicTitlePanel>Real Name:</ComicTitlePanel>
                </b>
                {character.alterego}
              </div>
              <CharacterStats />
              <div className='flex flex-col p-10'>
                <CharacterAbilities />
              </div>
            </div>
          </div>
        </div>

        <ComicPanel color='#bfbfbf'>
          <div className='flex flex-col p-10'>

            <div className='flex flex-row w-auto'>
              <ComicTitlePanel>
                <h1 className='text-2xl font-bold'>
                  Bio:
                </h1>
              </ComicTitlePanel>

            </div>
            <span className='sm:self-start'>
              {character.description}
            </span>

          </div>
        </ComicPanel>
        <CharacterPowers />
      </div>
    </FormProvider>
  )
}

export default CharacterFormDetail