import React from 'react'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'

const formatStatName = (name) => {
  // Divide el nombre en palabras usando las letras mayúsculas como separadores
  const words = name.split(/(?=[A-Z])/)

  // Capitaliza la primera letra de cada palabra
  const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return formattedName
}


const SkillItem = (props) => {

  const { skill } = props

  return (
    <div className='flex justify-between w-full border-b border-dashed border-secondary'>
      <b>
        {`${formatStatName(skill.name)}:`}
      </b>
      <label className='font-condensed font-bold text-power-4'>
        {skill.value}
      </label>
    </div>
  )
}

const CharacterSkills = (props) => {

  const { form } = useForm()

  return (
    <ComicPanel
      className={clsx(
        'flex flex-col',
        'w-full',
        'bg-comic-secondary',
        'p-4 py-8'
      )}
    >
      <div className="flex justify-center">
        <ComicTitlePanel>
          <h1 className='text-2xl font-bold'>
            Skills:
          </h1>
        </ComicTitlePanel>
      </div>
      {
        ([...form.skills, ...form.specialSkills])
          .sort((skill1, skill2) => skill1.name.localeCompare(skill2.name))
          .map((skill, index) =>
            <SkillItem
              key={index}
              skill={skill}
            />
          )
      }
    </ComicPanel>
  )
}

export default CharacterSkills