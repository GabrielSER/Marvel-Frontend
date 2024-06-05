import { useCallback, useState } from 'react'
import UIInput from '../../ui/UIInput'
import { Toolbar } from './Toolbar'
import ToolbarIcon from './ToolbarIcon'
import UISelect from '../../ui/UISelect'
import clsx from 'clsx'
import UIButton from '../../ui/UIButton'

const weapons = [
  {
    name: 'Beretta 9mm',
    weaponFactor: 2,
    weaponCapacity: 15,
    weaponRange: 100
  },
  {
    name: 'Super shotgun',
    weaponFactor: 4,
    weaponCapacity: 2,
    weaponRange: 20
  },
  {
    name: 'AK-47',
    weaponFactor: 3,
    weaponCapacity: 30,
    weaponRange: 300
  }
]

const initialState = {
  weapon: weapons[0],
  firearms: 5,
  targetBulletproof: 10,
  targetDefense: 10,
  targetAgility: 15,
  damage: 20
}

const FirearmsCalculator = () => {
  const [state, setState] = useState(initialState)

  const shoot = useCallback(() => {
    console.log(state)
    const attackRoll = Math.ceil(Math.random() * 20)
    let attack = attackRoll + state.firearms
    if (attackRoll === 20) {
      attack *= 2
    }

    const defense = state.targetDefense
    //const agility = Math.ceil(Math.random() * 20) + state.targetAgility
    const add = attack - defense
    const damage = Math.max(
      0,
      add * state.weapon.weaponFactor - state.targetBulletproof
    )
    console.log(damage)
    setState({
      ...state,
      damage
    })
  }, [state, setState])

  return (
    <ToolbarIcon toolbar={Toolbar.FIREARMS_CALCULATOR}>
      <div
        className={clsx(
          'flex',
          'w-full h-full',
          'gap-2',
          'divide-x divide-light-2',
          'uppercase font-condensed'
        )}
      >
        <div className='flex flex-col w-full h-full gap-2'>
          Weapon:
          <UISelect
            name='weapon'
            state={state}
            setState={setState}
            options={weapons}
            valueField='name'
          />
          Firearms:
          <UIInput
            name='firearms'
            state={state}
            setState={setState}
          />
          Target Bulletproof:
          <UIInput
            name='targetBulletproof'
            state={state}
            setState={setState}
          />
        </div>
        <div className='flex flex-col w-1/3 h-full pl-2 divide-y divide-light-2'>
          <span className='flex flex-col w-full gap-2'>
            <UIButton onClick={shoot}>Shoot</UIButton>
            <span className='w-full text-center justify-center'>Damage</span>
          </span>
          <span
            className={clsx(
              'flex',
              'justify-center items-center',
              'w-full h-full',
              'text-4xl font-condensed uppercase'
            )}
          >
            {state.damage > 0 && state.damage}
          </span>
        </div>
      </div>
    </ToolbarIcon>
  )
}

export default FirearmsCalculator
