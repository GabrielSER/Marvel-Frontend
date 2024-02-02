import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'


const ArmorCost = (props) => {

    const { form } = useForm()

    return (
        <div className='flex gap-4 items-center w-full'>
            {form.unlockCost && 
            <div>
                    <div className='flex gap-4 items-center w-full'>
                        <ComicTitlePanel className=' bg-comic-secondary'>
                            Unlock Cost:
                        </ComicTitlePanel>
                        {form.unlockCost} Skill Points
                    </div>
                    {form.unlockLevel && 
                        <div className='flex gap-4 items-center w-full'>
                            <ComicTitlePanel className=' bg-comic-secondary'>
                                Unlock Level:
                            </ComicTitlePanel>
                            Level {form.unlockLevel}
                        </div>
                    }
                    </div>
            }
        </div>


    )
}

export default ArmorCost