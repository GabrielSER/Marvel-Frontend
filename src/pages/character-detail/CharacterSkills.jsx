import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const formatStatName = (name) => {
  // Divide el nombre en palabras usando las letras mayúsculas como separadores
  const words = name.split(/(?=[A-Z])/)

  // Capitaliza la primera letra de cada palabra
  const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return formattedName
}


const CharacterSkill = () => {

  const { form } = useForm()

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <div className="flex flex-row w-auto">
      <ComicTitlePanel>
        <h1 className='text-2xl font-bold'>
          Skills:
        </h1>
        </ComicTitlePanel>
      </div>
     
        {
          form.skills
            .sort((skill1, skill2) => skill1.name.localeCompare(skill2.name))
            .map((skill) => (
              <p className='py-1 inline-block'>
                <b>
                  {formatStatName(skill.name)}
                </b>: {skill.value}
              </p>
            ))
        }
      </div>
    </div>
  )
}

const CharacterSpSkill = () => {

  const { form } = useForm()

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        {
          form.specialSkills
            .sort((skill1, skill2) => skill1.name.localeCompare(skill2.name))
            .map((specialSkill) => (
              <p className='py-1 inline-block'>
                <b>
                  {formatStatName(specialSkill.name)}
                </b>: {specialSkill.value}
              </p>
            ))
        }
      </div>
    </div>
  )
}

const CharacterSkills = (props) => {

  const { form } = useForm()
  const { defaultForm } = useCharacter()

  return (
    <div
      className={clsx(
        'flex flex-col'
      )}
    >
      {
        <CharacterSkill form={form} />
      }
      {
        <CharacterSpSkill form={form} />
      }
    </div>
  )
}

export default CharacterSkills