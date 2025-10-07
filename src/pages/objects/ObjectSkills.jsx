import clsx from 'clsx'
import { useForm } from '@contexts/FormContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import ComicPanel from '@ui/ComicPanel'
import PowerBg from '@assets/images/background/279.jpg'
import EditButton from '@ui/edit/EditButton'
import NumberEdit from '../ui/edit/NumberEdit'

const formatStatName = (name) => {
  // Divide el nombre en palabras usando las letras mayúsculas como separadores
  const words = name.split(/(?=[A-Z])/)

  // Capitaliza la primera letra de cada palabra
  const formattedName = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return formattedName
}

const SkillItem = (props) => {
  const { skill } = props

  return skill.value === 0 ? "" : (
    <div className='flex justify-between w-full border-b border-dashed border-secondary'>
      <span className='flex gap-2'>
        <EditButton
          title={`Edit ${skill.name} value:`}
          initialValue={skill.value}
          bodyComponent={NumberEdit}
          summitFunction={() => { }}
        />
        <b>{`${formatStatName(skill.name)}:`}</b>
      </span>
      <label className='font-condensed font-bold text-power-4'>
        {skill.value}
      </label>
    </div>
  )
}

const ObjectSkills = () => {
  const { form } = useForm()

  return (
    <div className='flex w-full justify-center'>
      {form.skills[0].name != 'noskills' && <ComicPanel
        className={clsx(
          'relative',
          'flex flex-col',
          'w-1/2',
          'overflow-hidden'
        )}
        style={{
          backgroundImage: `url(${PowerBg})`,
          backgroundSize: 'contain'
        }}
      >
        <div className='flex flex-col px-5 py-10  w-full h-full p-5 sm:p-10 gap-2 bg-comic-secondary bg-opacity-75'>
          <div className='flex justify-center'>
            <ComicTitlePanel>
              <h1 className='text-2xl font-bold'>Stat or Skill bonus:</h1>
            </ComicTitlePanel>
          </div>
          {[...form.skills, ...form.specialSkills.filter(skill => skill.name.toLowerCase() !== 'flight')]
            .sort((skill1, skill2) => skill1.name.localeCompare(skill2.name))
            .map((skill, index) => (
              <SkillItem
                key={index}
                skill={skill}
              />
            ))}
        </div>
      </ComicPanel>}
    </div>

  )
}

export default ObjectSkills
