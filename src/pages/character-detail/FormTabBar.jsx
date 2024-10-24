import clsx from 'clsx'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCharacter } from '@contexts/CharacterContext'
import { useCharacterDetail } from '@contexts/CharacterDetailContext'
import { normalizeString } from '@util/stringUtil'
import NavigationTab from '@ui/NavigationTab'
import Title from '@ui/Title'

const FormTab = (props) => {
  const { character, defaultForm } = useCharacter()
  const { form } = props
  const { selectedForm } = useCharacterDetail()
  const navigate = useNavigate()

  const navigateToForm = useCallback(() => {
    const characterRoute = `/characters/${normalizeString(character.name)}`
    if (form._id == character.defaultForm) {
      navigate(`${characterRoute}`)
    } else {
      navigate(`${characterRoute}/${normalizeString(form.name)}`)
    }
  }, [character, defaultForm, form])

  return (
    <NavigationTab
      className='snap-start whitespace-nowrap'
      active={form._id === selectedForm?._id}
      onClick={navigateToForm}
    >
      {form.name.toUpperCase()}
    </NavigationTab>
  )
}

const FormTabBar = () => {
  const { character, defaultForm, characterForms } = useCharacter()

  const forms = useMemo(
    () => [defaultForm, ...characterForms],
    [defaultForm, characterForms]
  )

  if (defaultForm == null) return null

  return (
    <div
      className={clsx(
        'flex flex-col',
        'w-full',
        'shrink-0',
        'px-4',
        'bg-secondary'
      )}
    >
      <div className='hidden md:flex w-full h-16 justify-center items-center'>
        <Title className='text-primary'>
          {`${character.name}'s forms`}
        </Title>
      </div>
      <div
        className={clsx(
          'flex md:flex-wrap',
          'w-full',
          'justify-around',
          'h-12 md:h-max',
          'gap-x-5 gap-y-2',
          'overflow-x-auto overflow-y-hidden',
          'snap-x snap-proximity',
          'hide-scroll'
        )}
      >
        {forms.map((form) => (
          <FormTab
            key={form._id}
            form={form}
          />
        ))}
      </div>
    </div>
  )
}

export default FormTabBar
