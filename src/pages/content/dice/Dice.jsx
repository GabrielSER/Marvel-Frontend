import { ReactComponent as D4 } from '../../../assets/svg/dice/d4.svg'
import { ReactComponent as D6 } from '../../../assets/svg/dice/d6.svg'
import { ReactComponent as D8 } from '../../../assets/svg/dice/d8.svg'
import { ReactComponent as D10 } from '../../../assets/svg/dice/d10.svg'
import { ReactComponent as D12 } from '../../../assets/svg/dice/d12.svg'
import { ReactComponent as D20 } from '../../../assets/svg/dice/d20.svg'
import clsx from 'clsx'

const DiceType = {
    D4: {
        id: 'd4',
        value: 4,
        logo: <D4 />
    },
    D6: {
        id: 'd6',
        value: 6,
        logo: <D6 />
    },
    D8: {
        id: 'd8',
        value: 8,
        logo: <D8 />
    },
    D10: {
        id: 'd10',
        value: 10,
        logo: <D10 />
    },
    D12: {
        id: 'd12',
        value: 12,
        logo: <D12 />
    },
    D20: {
        id: 'd20',
        value: 20,
        logo: <D20 />
    }
}

const Dice = (props) => {

    const { type } = props

    const { logo } = type

    return (
        <div
            className={clsx(
                'flex',
                'aspect-square',
                'justify-center items-center',
                'w-28 p-3',
                'bg-primary',
                'rounded-full',
                'transition-all'
            )}
        >
            {logo}
        </div>
    )
}

export { Dice, DiceType }