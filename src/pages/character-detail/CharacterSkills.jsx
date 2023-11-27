import React from 'react'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'
import PowerBg from '../../assets/images/background/279.jpg'

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
        ' relative overflow-hidden',
      )}
      style={{
        backgroundImage: `url(${PowerBg})`,
        backgroundSize: 'contain' // You can also use 'contain' if you prefer
      }}
    >
      <div className='flex flex-col px-5 py-10  w-full h-full p-5 sm:p-10 bg-comic-secondary bg-opacity-75'>
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
      </div>

    </ComicPanel>
  )
}

export default CharacterSkills