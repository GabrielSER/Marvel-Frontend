import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'

const DescriptionParagraph = (props) => {

    const { title, features } = props

    if (features.length === 0) return null

    return (
        <ComicPanel className='bg-comic-primary-light py-8 px-10'>
            <div className='flex flex-row w-auto'>
                <ComicTitlePanel>
                    {title}
                </ComicTitlePanel>
            </div>
            <div className={clsx('flex flex-col py-4 gap-4')}>
                {
                    features
                        .map(feature => feature.split(':'))
                        .map(([featureName, featureDescription], index) =>
                            <div
                                key={index}
                                className='flex flex-col'
                            >
                                <ComicTitlePanel className=' bg-comic-secondary'>
                                    {`${featureName}:`}
                                </ComicTitlePanel>

                                <p>
                                    {featureDescription}
                                </p>
                            </div>
                        )
                }
            </div>
        </ComicPanel>
    )
}

const CharacterAbilities = (props) => {

    const { form } = useForm()

    return (
        <div className={clsx('flex flex-col py-2 gap-2')}>
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