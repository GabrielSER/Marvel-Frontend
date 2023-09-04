import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext';
import { useEffect } from 'react';
import { useState } from 'react';

const CharacterPower = (props) => {

    const { power } = props

    const {
        level,
        name,
        module,
        bonusDamage,
        type,
        skillCheck,
        description
    } = power

    return (
        <div
            className={clsx(
                'flex',
                'relative',
                'w-80 h-72',
                'rounded-md',
                'hover:scale-105',
                'overflow-x-hidden',
                'overflow-x-auto',
                'p-4',
                level == '0' && 'bg-[violet]',
                level == '1' && 'bg-[cornflowerblue]',
                level == '2' && 'bg-[darkseagreen]',
                level == '3' && 'bg-[gold]',
                level == '4' && 'bg-[tomato]',
                level == '5' && 'bg-[darkgrey]'
            )}
        >
            <p><b>{power.bonusDamage} {power.name}<i> {power.type} {power.skillCheck} </i></b>{power.description}</p>
        </div>
    )

}

export default CharacterPower   