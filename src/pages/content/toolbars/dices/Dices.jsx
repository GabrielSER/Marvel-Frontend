import clsx from 'clsx'
import { DiceType } from '../../dice/Dice'
import { Toolbar } from '../Toolbar'
import ToolbarIcon from '../ToolbarIcon'
import ResultPanel from './ResultPanel'
import AddDiceButton from './AddDiceButton'
import DiceMat from './DiceMat'

const DiceBar = () => {

  return (
    <div
      className={clsx(
        'flex grow-0 flex-wrap',
        'justify-center',
        'pt-2 gap-2'
      )}
    >
      {
        Object.values(DiceType).map((diceType, index) =>
          <AddDiceButton
            key={index}
            diceType={diceType}
          />
        )
      }
    </div>
  )
}

const Dices = () => {
  return (
    <ToolbarIcon toolbar={Toolbar.DICES}>
        <div
          className={clsx(
            'flex',
            'w-full',
            'gap-2',
            'divide-x divide-light-2'
          )}
        >
          <div
            className={clsx(
              'flex flex-col',
              'w-full gap-2',
              'divide-y divide-light-2'
            )}
          >
            <DiceMat />
            <DiceBar />
          </div>
          <ResultPanel />
        </div>
    </ToolbarIcon>
  )
}

export default Dices