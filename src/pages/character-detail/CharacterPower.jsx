import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ComicPanel from '../ui/ComicPanel';
import ComicTitlePanel from '../ui/ComicTitlePanel';

const CharacterPower = (props) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const { power } = props

  const {
    level,
  } = power




  return (
    <ComicPanel
      className={clsx(
        level === 0 && 'bg-power-0',
        level === 1 && 'bg-power-1',
        level === 2 && 'bg-power-2',
        level === 3 && 'bg-power-3',
        level === 4 && 'bg-power-4',
        level === 5 && 'bg-power-5'
      )}
    >
      <div
        className={clsx(
          'flex',
          'relative',
          'overflow-hidden',
          'rounded-md',
          'min-h-full',
          'p-4',
          'bg-opacity-75',
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