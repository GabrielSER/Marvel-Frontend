import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const ComicLabel = (props) => {
  const { title, text } = props

  return (
    <div className='flex gap-4 items-center w-full'>
      <ComicTitlePanel className=' bg-comic-secondary'>{title}</ComicTitlePanel>
      {text}
    </div>
  )
}

const ArmorCost = () => {
  const { form } = useForm()

  const { unlockCost, unlockLevel } = form

  if (!unlockCost && !unlockLevel) return null

  return (
    <>
      <ComicLabel
        title='Unlock Cost:'
        text={`${form.unlockCost} Skill Points`}
      />
      {unlockLevel && (
        <ComicLabel
          title='Unlock Level:'
          text={`Level ${form.unlockLevel}`}
        />
      )}
    </>
  )
}

export default ArmorCost
