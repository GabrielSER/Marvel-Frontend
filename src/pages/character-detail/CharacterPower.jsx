import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

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
        'shadow-sm',
        'w-80 h-72',
        'overflow-hidden',
        'rounded-md',
        'hover:scale-105',
        'hover:h-auto',
        'hover: shadow-lg',
        'min-h-full',
        'p-4',
        'bg-opacity-75',
        level == '0' && 'bg-pink-700',
        level == '1' && 'bg-sky-600',
        level == '2' && 'bg-green-700',
        level == '3' && 'bg-yellow-600',
        level == '4' && 'bg-red-700',
        level == '5' && 'bg-gray-500'
      )}
    >
      <div className="flex flex-col h-full">
        <p className='text-ellipsis overflow-hidden ...'>
          <b>
            {power.bonusDamage} {power.name}
            <i> {power.type} {power.skillCheck} </i>
          </b>
          {
            power.module &&
            <p>
              <b>
                Module:
              </b>
              {power.module}
            </p>
          }
          {power.description}
        </p>

      </div>
    </div>

  );
}

export default CharacterPower   