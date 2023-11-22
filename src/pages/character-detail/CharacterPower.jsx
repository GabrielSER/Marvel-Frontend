import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ComicPanel from '../content/ComicPanel';
import ComicTitlePanel from '../content/ComicTitlePanel';

const CharacterPower = (props) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const { power } = props

  const {
    level,
  } = power


  let color;
  switch (level) {
    case 0:
      color = '#d680bd';
      break;
    case 1:
      color = '#8eaadb';
      break;
    case 2:
      color = '#a8d08d';
      break;
    case 3:
      color = '#e9e259';
      break;
    case 4:
      color = '#df6f63';
      break;
    case 5:
      color = '#bfbfbf';
      break;
    default:
      color = 'bg-gray-500';
  }

  return (
    <ComicPanel color={color}
    >
      <div
      className={clsx(
        'flex',
        'relative',
        'shadow-sm',
        !isClicked && 'w-80',
        !isClicked && 'h-40',
        'overflow-hidden',
        'rounded-md',
        !isClicked && 'hover:scale-105',
        isClicked && 'h-auto',
        isClicked && 'w-full sm:w-120',
        isClicked && 'shadow-lg',
        'min-h-full',
        'p-4',
        'bg-opacity-75'
     
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <p className='text-ellipsis overflow-hidden ...'>
          <div className='flex flex-row'>
          <ComicTitlePanel>
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

          {power.skillCheck && <p>
            <b>
              Skill Check:
            </b>
            {" "} {power.skillCheck}
          </p>
          }

          {power.bonusDamage && <p>
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

           isClicked && <div>

              <p>
                <b>
                  Description:
                </b>
                {" "} {power.description}
              </p>

              {
                power.statusEffect[0] && <p>
                  <b>
                    Effect:
                  </b>
                  {" "} {power.statusEffect}
                </p>
              }
      
            </div>

          }
          

        </p>

      </div>
    </div>
    </ComicPanel>
    

  );
}
    /* 
      {power.form && <p>
                <b>
                  Damage:
                </b>
                {" "} {power.form}
              </p>

              }
               {power.character && <p>
                <b>
                  Leveling:
                </b>
                {" "} {power.character}
              </p>

               }

              */

export default CharacterPower   