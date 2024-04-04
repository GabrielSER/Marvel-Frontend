import clsx from 'clsx'
import { useDices } from '../../../../contexts/DicesContext'
import UIButton from '../../../ui/UIButton'

const ButtonPanel = () => {

    const { 
        clearRolls,
        reset,
        roll
     } = useDices()

    return (
        <div
            className={clsx(
                'flex flex-col',
                'w-full',
                'gap-2'
            )}
        >
            <UIButton
                className='w-full h-min font-condensed uppercase'
                onClick={reset}
            >
                Reset values
            </UIButton>
            <UIButton
                className='w-full h-min font-condensed uppercase'
                onClick={clearRolls}
            >
                Clear dices
            </UIButton>
            <UIButton
                className='w-full h-min font-condensed uppercase text-xl'
                onClick={roll}
            >
                Roll
            </UIButton>
        </div>
    )
}

const ResultPanel = () => {

    const { total } = useDices()

    return (
        <div
            className={clsx(
                'flex flex-col',
                'w-1/3',
                'pl-2 gap-2',
                'divide-y divide-light-2'
            )}
        >
            <ButtonPanel />
            <span
                className={clsx(
                    'flex',
                    'justify-center items-center',
                    'w-full h-full',
                    'text-3xl font-condensed uppercase'
                )}
            >
                {total > 0 && total}
            </span>
        </div>
    )
}

export default ResultPanel