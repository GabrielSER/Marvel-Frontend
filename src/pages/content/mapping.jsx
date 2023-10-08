import Burned from './statusEffect/Burned'
import { Dice, DiceType } from './dice/Dice'
import DiceRoller from './dice/DiceRoller'
import Blinded from './statusEffect/Blinded'
import Bleeding from './statusEffect/Bleeding'
import Charmed from './statusEffect/Charmed'
import Comatose from './statusEffect/Comatose'
import Confused from './statusEffect/Confused'
import Concentrated from './statusEffect/Concentrated'
import Deafened from './statusEffect/Deafened'

export const contentMapping = () => ({
    'burned': <Burned />,
    'blinded': <Blinded />,
    'bleeding': <Bleeding />,
    'charmed': <Charmed />,
    'comatose': <Comatose />,
    'confused': <Confused />,
    'deafened': <Deafened />,
    'concentrated': <Concentrated />,
    'd4': <Dice type={DiceType.D4} />,
    'd6': <Dice type={DiceType.D6} />,
    'd8': <Dice type={DiceType.D8} />,
    'd10': <Dice type={DiceType.D10} />,
    'd12': <Dice type={DiceType.D12} />,
    'd20': <Dice type={DiceType.D20} />,
    'roll': <DiceRoller />
})