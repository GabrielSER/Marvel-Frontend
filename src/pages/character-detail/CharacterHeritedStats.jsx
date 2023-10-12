import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'

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
        <h1 className='text-2xl font-bold'>
          Skills:
        </h1>
        {
          form.skills.map((skill) => (
            <p className='py-1 inline-block'><b>{formatStatName(skill.name)}</b>: {skill.value}</p>
          ))
        }
      </div>
    </div>
  )
}

const CharacterHeritedStats = (props) => {

  const { form } = useForm()
  const { defaultForm } = useCharacter()

  return (
    <div
      className={clsx(
        'flex flex-col'
      )}
    >
      {
        defaultForm &&
        <CharacterStat form={form} />
      }
      {
        <CharacterSkill form={form} />
      }
      {
        <CharacterSpSkill form={form} />
      }
    </div>
  )
}

export default CharacterHeritedStats