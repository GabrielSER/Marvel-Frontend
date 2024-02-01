import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'

const DescriptionParagraph = (props) => {

    const { title, cost, lvl } = props

    if (cost.length === 0) return null

    return (
        <div className='flex flex-col gap-4 w-full'>
            <ComicTitlePanel>
                Armor Requirements
            </ComicTitlePanel>
            <div className='flex gap-4 items-center w-full'>
                <ComicTitlePanel className=' bg-comic-secondary'>
                    Unlock Cost:
                </ComicTitlePanel>
                {cost}
            </div>  <div className='flex gap-4 items-center w-full'>
                <ComicTitlePanel className=' bg-comic-secondary'>
                    Unlock Level:
                </ComicTitlePanel>
                {lvl}
            </div>
        </div>
    )
}

const ArmorCost = (props) => {

    const { form } = useForm()

    return (
        <div>
             {form.unlockCost && <div className='flex flex-col gap-4 items-center w-full'>
               <div className='flex gap-4 items-center w-full'>
                    <ComicTitlePanel className=' bg-comic-secondary'>
                        Unlock Cost:
                    </ComicTitlePanel>
                    {form.unlockCost} Skill Points
                </div>
                {form.unlockLevel && <div className='flex gap-4 items-center w-full'>
                    <ComicTitlePanel className=' bg-comic-secondary'>
                        Unlock Level:
                    </ComicTitlePanel>
                    Level {form.unlockLevel}
                </div>}
            </div>}
        </div>


    )
}

export default ArmorCost