import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'

const CharacterAbility = () => {

    const { form } = useForm()

    return (
        <div className='flex flex-row'>
            {
                form.abilities.length > 0 && <div className='flex flex-col my-2'>
                    <h1 className='text-2xl font-bold'>
                        Abilities:
                    </h1>
                    {
                        form.abilities.map((ability) => (
                            <p className='py-2'><b>{ability.split(':')[0]}</b>: {ability.split(':')[1]}</p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

const CharacterWeakness = () => {

    const { form } = useForm()

    return (
        <div className='flex flex-row'>
            {
                form.weaknesses.length > 0 &&
                <div className='flex flex-col my-2'>
                    <h1 className='text-2xl font-bold'>
                        Weaknesses:
                    </h1>
                    {
                        form.weaknesses.map((weakness) => (
                            <p className='py-2'><b>{weakness.split(':')[0]}</b>: {weakness.split(':')[1]}</p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

const CharacterAbilities = (props) => {

    return (
        <div
            className={clsx(
                'flex flex-col'
            )}
        >
            <CharacterAbility />
            <CharacterWeakness />
        </div>
    )
}

export default CharacterAbilities