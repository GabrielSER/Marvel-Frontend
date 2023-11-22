import clsx from "clsx"
import { useCharacter } from "../../contexts/CharacterContext"
import { FormProvider } from "../../contexts/FormContext"
import FormTabBar from "./FormTabBar"
import LazyImage from "../ui/LazyImage"
import CharacterStats from "./CharacterStats"
import CharacterAbilities from "./CharacterAbilities"
import CharacterPowers from "./CharacterPowers"
import { useState } from "react"
import { useCharacterDetail } from "../../contexts/CharacterDetailContext"
import CharacterSkills from "./CharacterSkills"
import Comicbook from "../content/ComicPanel"
import ComicPanel from "../content/ComicPanel"
import ComicTitlePanel from "../content/ComicTitlePanel"

const CharacterFormDetail = (props) => {

  const { selectedForm } = useCharacterDetail()
  const { character } = useCharacter()

  if (selectedForm == null) return null

  return (
    <FormProvider form={selectedForm}>
      <div className={clsx('sm:p-10')}>
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
            <div className={clsx('flex flex-col w-full sm:w-1/3 h-full gap-y-3')}>
              <div className='flex flex-row hover:scale-105'>
                <LazyImage
                  src={selectedForm.image}
                  alt={selectedForm.name}
                  className='w-50 h-auto mx-auto object-cover self-center'
                  imageClassname='w-50 h-full object-cover self-center'
                />
              </div>
              <ComicPanel color='#ded9d9'>
                <div className="flex flex-col p-10">
                  <CharacterSkills />
                </div>
              </ComicPanel>
            </div>
            <div className={clsx('flex flex-col w-full sm:w-2/3 sm:mx-20 h-full mx-2 ')}>
              <p className='sm:self-start mb-2'> <b className='text-2xl font-bold px-2'><ComicTitlePanel>Real Name:</ComicTitlePanel>  </b>{character.alterego} </p>
              <CharacterStats />
                <div className="flex flex-col p-10">
                <CharacterAbilities />
                </div>
             
            </div>
          </div>
        </div>

        <ComicPanel color='#bfbfbf'>
          <div className="flex flex-col p-10">

            <div className="flex flex-row w-auto">
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