import { useCallback, useEffect, useState } from 'react'
import { useDices } from '../../../../contexts/DicesContext'
import Tooltip from '../../../ui/Tooltip'
import DiceButton from './DiceButton'
import RollDice from './RollDice'
import UIButton from '../../../ui/UIButton'
import clsx from 'clsx'
import { MdArrowDropDown } from 'react-icons/md'

const RollOptionDropdown = () => {

    return (
        <div className='absolute w-32 h-16 bg-dark'>
            <div
                className={clsx(
                    '',
                    'flex flex-col',
                    'w-full h-full',
                    'ui-box'
                )}
            >
                adsd
            </div>
        </div>
    )
}

const OptionButton = (props) => {

    const { open, setOpen } = props

    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={clsx(
                'absolute flex',
                'bottom-0 right-0',
                'justify-center items-center',
                'w-5 h-5',
                'bg-dark',
                'rounded-md',
                'text-m'
            )}
        >
            <UIButton
                className={clsx(
                    'w-full h-full'
                )}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => {
                    setHovered(false)
                    setOpen(false)
                }}
            >
                <div className='relative bg-dark'>
                    <MdArrowDropDown />
                    {
                        (hovered && open) &&
                        <RollOptionDropdown />
                    }
                </div>
            </UIButton>
        </div>
    )
}

const AddDiceButton = (props) => {

    const { diceType } = props
    const properties = { ...props }

    const [open, setOpen] = useState(false)
    const { addRoll } = useDices()

    const handleClick = useCallback(() => {
        addRoll(<RollDice diceType={diceType} />)
    }, [diceType, addRoll])

    return (
        <div className='relative flex'>
            <Tooltip
                top
                content={`Add ${diceType.id}`}
            >
                <DiceButton
                    onClick={handleClick}
                    {...properties}
                />
            </Tooltip>
            <OptionButton
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}

export default AddDiceButton