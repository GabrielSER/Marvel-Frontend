import Burned from './statusEffect/Burned'
import Blinded from './statusEffect/Blinded'
import Bleeding from './statusEffect/Bleeding'
import Charmed from './statusEffect/Charmed'
import Comatose from './statusEffect/Comatose'
import Confused from './statusEffect/Confused'
import Concentrated from './statusEffect/Concentrated'
import Deafened from './statusEffect/Deafened'
import Drugged from './statusEffect/Drugged'
import Drunk from './statusEffect/Drunk'
import Frightened from './statusEffect/Frightened'
import Frozen from './statusEffect/Frozen'
import Grappled from './statusEffect/Grappled'
import Irradiated from './statusEffect/Irradiated'
import Prone from './statusEffect/Prone'
import Invisible from './statusEffect/Invisible'
import Paralyzed from './statusEffect/Paralyzed'
import Petrified from './statusEffect/Petrified'
import Possessed from './statusEffect/Possessed'
import Poisoned from './statusEffect/Poisoned'
import PurpleControl from './statusEffect/PurpleControl'
import Sleeping from './statusEffect/Sleeping'
import Soaked from './statusEffect/Soaked'
import Stunned from './statusEffect/Stunned'
import TelepathicControl from './statusEffect/TelepathicControl'

import { Dice, DiceType } from './dice/Dice'
import DiceRoller from './dice/DiceRoller'
import ContentView from '../ui/ContentView'
import Hp from './stats/hp'
import { toolbarMapping } from './toolbars/Toolbar'

export const contentMapping = () => ({
    'view': <ContentView />,
    'burned': <Burned />,
    'blinded': <Blinded />,
    'bleeding': <Bleeding />,
    'charmed': <Charmed />,
    'comatose': <Comatose />,
    'confused': <Confused />,
    'deafened': <Deafened />,
    'drugged': <Drugged />,
    'drunk': <Drunk />,
    'concentrated': <Concentrated />,
    'frightened': <Frightened />,
    'frozen': <Frozen />,
    'grappled': <Grappled />,
    'irradiated': <Irradiated />,
    'prone': <Prone />,
    'invisible': <Invisible />,
    'paralyzed': <Paralyzed />,
    'petrified': <Petrified />,
    'possessed': <Possessed />,
    'poisoned': <Poisoned />,
    'purple': <PurpleControl />,
    'sleeping': <Sleeping />,
    'soaked': <Soaked />,
    'stunned': <Stunned />,
    'telepath': <TelepathicControl />,
    'hp': <Hp />,
    'd4': <Dice type={DiceType.D4} />,
    'd6': <Dice type={DiceType.D6} />,
    'd8': <Dice type={DiceType.D8} />,
    'd10': <Dice type={DiceType.D10} />,
    'd12': <Dice type={DiceType.D12} />,
    'd20': <Dice type={DiceType.D20} />,
    'roll': <DiceRoller />,
    ...toolbarMapping
})