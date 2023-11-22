import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'

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
                        <p key={index}>
                            <b>{`${featureName}:`}</b>
                            {featureDescription}
                        </p>
                    )
            }
        </>
    )
}

const CharacterAbilities = (props) => {

    const { form } = useForm()

    return (
        <div className={clsx('flex flex-col px-4 gap-2')}>
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