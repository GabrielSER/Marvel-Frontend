import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import ComicPanel from '../ui/ComicPanel'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import PowerBg from '../../assets/images/background/images.png'

const romanNumbers = ['0', 'I', 'II', 'III', 'IV', 'V']
const romanNumber = (number) => romanNumbers?.[number] ?? '?'

const CharacterPower = (props) => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const { power } = props

  const { level } = power

  return (
    <ComicPanel
      className={clsx(
        'flex',
        'relative',
        'overflow-hidden',
        'min-h-full',
        'ease-in-out transition-all',
        'bg-hero-pattern',
        isClicked && [
          'h-auto',
          'w-full sm:w-120',
          'shadow-lg'
        ],
        !isClicked && [
          'w-80 h-40',
          'hover:scale-105'
        ]
      )}
      style={{
        backgroundImage: `url(${PowerBg})`,
        backgroundSize: 'cover' // You can also use 'contain' if you prefer
      }}
      onClick={handleClick}
    >
      <div
        className={clsx(
          'flex flex-col h-full w-full',
          'bg-opacity-75',
          level === 0 && 'bg-power-0',
          level === 1 && 'bg-power-1',
          level === 2 && 'bg-power-2',
          level === 3 && 'bg-power-3',
          level === 4 && 'bg-power-4',
          level === 5 && 'bg-power-5',
        )}
      >
        <div className='text-ellipsis overflow-hidden px-4 py-2'>
          <div className='flex flex-row'>
            <ComicTitlePanel className='text-md bg-comic-primary'>
              <b>
                {power.name}
              </b>
            </ComicTitlePanel>
          </div>
          <p>
            <b>
              Type:
            </b>
            {" "} {power.type}
          </p>
          {
            power.skillCheck && <p>
              <b>
                Skill Check:
              </b>
              {" "} {power.skillCheck}
            </p>
          }

          {
            power.bonusDamage && <p>
              <b>
                Bonus Damage:
              </b>
              {" "} {power.bonusDamage}
            </p>
          }

          {
            power.module &&
            <p>
              <b>
                Module:
              </b>
              {" "} {power.module}
            </p>
          }
          {

            isClicked &&
            <div>
              <p>
                <b>
                  Description:
                </b>
                {" "} {power.description}
              </p>
              {
                power.statusEffect[0] &&
                <p>
                  <b>
                    Effect:
                  </b>
                  {" "} {power.statusEffect}
                </p>
              }
              <hr className='mt-2 bg-black' />
              <span className='font-condensed font-bold'>
                {`Level ${romanNumber(power.level)}`}
              </span>
            </div>
          }
        </div>
      </div>
    </ComicPanel>
  )
}

export default CharacterPower   