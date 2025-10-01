import clsx from 'clsx'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormProvider } from '@contexts/FormContext'
import { useCharacterDetail } from '@contexts/CharacterDetailContext'
import { useFormWithNormalizedName } from '@hooks/useFormWithNormalizedName'
import { useCharacter } from '@contexts/CharacterContext'
import ObjectPowers from './ObjectPowers'
import ObjectSkills from './ObjectSkills'
import ObjectImage from './ObjectImage'
import ObjectLogo from './ObjectLogo'
import ObjectBio from './ObjectBio'
import ObjectAbilities from './ObjectAbilities'

const Section = (props) => (
  <div
    className='flex flex-col lg:flex-row justify-center gap-4 overflow-hidden'
    {...props}
  />
)

const Column = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <div
      className={clsx(
        'flex flex-col',
        'gap-4',
        'p-4',
        'w-full',
        'items-center',
        className
      )}
      {...properties}
    />
  )
}

const ObjectDetail = () => {

  const navigate = useNavigate()
  const { formNormalized } = useParams()
  const { form, loading } = useFormWithNormalizedName(formNormalized)
  const { defaultForm } = useCharacter()
  const { selectedForm, setSelectedForm } = useCharacterDetail()

  useEffect(() => {
    if (loading) return
    if (!formNormalized) {
      setSelectedForm(defaultForm)
    } else {
      if (form != null) {
        setSelectedForm(form)
      } else {
        navigate('/not-found')
      }
    }
  }, [loading, formNormalized, form, defaultForm, selectedForm, setSelectedForm, navigate])

  if (selectedForm == null) return null

  return (
    <FormProvider form={selectedForm}>
      <div className={clsx('flex flex-col w-full justify-center p-4 lg:p-5')}>
        <ObjectLogo />
        <Section>
          <Column className='w-full lg:w-1/3 shrink-0'>
            <ObjectImage />
          </Column>
          <Column>
            <ObjectBio />
            <ObjectAbilities />
            <ObjectSkills />

            <ObjectPowers />
          </Column>
        </Section>

      </div>
    </FormProvider>
  )
}

export default ObjectDetail
