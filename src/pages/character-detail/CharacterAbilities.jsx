import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'

const DescriptionParagraph = (props) => {

    const { title, features } = props

    if (features.length === 0) return null

    return (
        <>
            <div className='flex flex-row w-auto'>
                <ComicTitlePanel>
                    {title}
                </ComicTitlePanel>
            </div>
            {
                features
                    .map(feature => feature.split(':'))
                    .map(([featureName, featureDescription], index) =>
                        <ComicPanel key={index} className='flex flex-col bg-comic-primary-light py-4 px-6'>
                                <ComicTitlePanel className=' bg-comic-primary'>{`${featureName}:`}</ComicTitlePanel>
                                
                            <p>
                                {featureDescription}
                            </p>
                        </ComicPanel>
                    )
            }
        </>
    )
}

const CharacterAbilities = (props) => {

    const { form } = useForm()

    return (
        <div className={clsx('flex flex-col py-4 gap-4')}>
            <DescriptionParagraph
                title='Abilities:'
                features={form.abilities}
            />
            <DescriptionParagraph
                title='Weaknesses:'
                features={form.weaknesses}
            />
        </div>
    )
}

export default CharacterAbilities