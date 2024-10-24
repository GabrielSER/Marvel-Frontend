import { DiceType } from '../dice/Dice'
import { GiPistolGun } from 'react-icons/gi'
import Dices from './dices/Dices'
import FirearmsCalculator from './FirearmsCalculator'

const Toolbar = {
  DICES: {
    id: 'dices',
    component: <Dices />,
    name: 'Dices',
    longName: 'Dice roller',
    icon: DiceType.D20.logo
  },
  FIREARMS_CALCULATOR: {
    id: 'firearms_calculator',
    component: <FirearmsCalculator />,
    name: 'Firearms',
    longName: 'Firearms calculator',
    icon: <GiPistolGun />
  }
}

const toolbarMapping =
  Object
    .values(Toolbar)
    .reduce(
      (mapping, { id, component }) => {
        mapping[id] = component
        return mapping
      }, {})

export { Toolbar, toolbarMapping }
