import clsx from 'clsx'
import { useForm } from '@contexts/FormContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import ComicPanel from '@ui/ComicPanel'
import EditButton from '@ui/edit/EditButton'
import TextEdit from '@ui/edit/TextEdit'

const DescriptionParagraph = (props) => {
  const { title, features } = props

  if (features.length === 0) return null

  return (
    <ComicPanel className='bg-comic-primary-light py-12 px-5 sm:px-14'>
      <div className='flex flex-row max-w-full'>
        <ComicTitlePanel>{title}</ComicTitlePanel>
      </div>
      <div className={clsx('flex flex-col py-4 gap-4')}>
        {features
          .map((feature, index) => {
            const featureParts = feature.split(':')
            const featureName = featureParts?.[0] ?? `Feature #${index + 1}`
            const colonIndex = feature.indexOf(':')
            const featureDescription = (featureParts.length > 0 && colonIndex !== feature.length) ? feature.substring(colonIndex + 1) : feature
            return [feature, featureName, featureDescription]
          })
          .map(([feature, featureName], index) => (
            <div
              key={index}
              className='relative flex flex-col'
            >
              <p>{feature}</p>
              <EditButton
                absolute
                title={`Edit feature "${featureName}":`}
                initialValue={feature}
                bodyComponent={TextEdit}
                summitFunction={() => { }}
              />
            </div>
          ))}
      </div>
    </ComicPanel>
  )
}

const ObjectAbilities = () => {
  const { form } = useForm()

  return (
    <div className={clsx('flex flex-col py-2 gap-2 max-w-full')}>
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

export default ObjectAbilities
