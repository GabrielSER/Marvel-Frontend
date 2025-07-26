import { DiceType } from '../dice/Dice'
import Dices from './dices/Dices'

const Toolbar = {
  DICES: {
    id: 'dices',
    component: <Dices />,
    name: 'Dices',
    longName: 'Dice roller',
    icon: DiceType.D20.logo
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
