import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useMemo } from 'react'
import { useEffect } from 'react'
import NavigationTab from '../ui/NavigationTab'
import Title from '../ui/Title'
import { useCharacterDetail } from '../../contexts/CharacterDetailContext'

const FormTab = (props) => {

    const {form} = props
    const { selectedForm, setSelectedForm } = useCharacterDetail()

    return (
        <NavigationTab
            active={form._id === selectedForm?._id}
            onClick={() => setSelectedForm(form)}
        >
            {form.name.toUpperCase()}
        </NavigationTab>
    )
}

const FormTabBar = (props) => {

    const { selectedForm, setSelectedForm } = useCharacterDetail()

    const {
        character,
        defaultForm,
        characterForms
    } = useCharacter()

    const forms = useMemo(() => [defaultForm, ...characterForms], [defaultForm, characterForms])

    if (defaultForm == null) return null

    return (
        <div
            className={clsx(
                'flex flex-wrap',
                'gap-x-5 gap-y-2',
                'px-4',
                'bg-secondary'
            )}
        >
            <div className='flex w-full h-16 justify-center items-center'>
                <Title className='text-primary'>
                    {`${character.name}'s forms`}
                </Title>
            </div>
            {
                forms.map((form, index) =>
                    <FormTab
                        key={index}
                        form={form}
                    />)
            }
        </div>
    )
}

export default FormTabBar