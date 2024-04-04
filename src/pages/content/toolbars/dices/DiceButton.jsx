import clsx from 'clsx'
import UIButton from '../../../ui/UIButton'

const DiceButton = (props) => {

    const {
        diceType,
        className
    } = props

    const properties = { ...props }

    delete properties.className
    delete properties.diceType

    return (
        <UIButton
            className={clsx(
                'w-16 h-16',
                className
            )}
            {...properties}
        >
            {diceType.logo}
        </UIButton>
    )
}

export default DiceButton