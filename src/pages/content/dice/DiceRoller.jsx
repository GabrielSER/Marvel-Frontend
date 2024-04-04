import { useEffect, useState } from 'react'
import { useSound } from 'use-sound'
import Content from '../../ui/Content'
import Title from '../../ui/Title'
import clsx from 'clsx'

import rollFile from '../../../assets/sound/dice-roll.mp3'
import minRolFile from '../../../assets/sound/dice-min.mp3'
import maxRolFile from '../../../assets/sound/dice-max.mp3'
import { typesById } from './Dice'

const Bubble = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <label
            className={clsx(
                'flex justify-center items-center',
                'aspect-square',
                'text-black font-semibold',
                'font-mono',
                'rounded-full',
                'select-none',
                className
            )}
            {...properties}
        />
    )
}

const ROLL_VARIANCE = 200
const ROLL_DURATION = 1000

const DiceRoller = (props) => {

    const { type } = props

    const diceType = typesById.get(type) ?? type

    if (!diceType) {
        throw new Error(`Invalid DiceRoller 'type' property: ${type}`)
    }

    const { id, value } = diceType

    const [rolling, setRolling] = useState()
    const [rollAmount, setRollAmount] = useState(1)
    const [rollValue, setRollValue] = useState()
    const [hovered, setHovered] = useState()

    const [playRoll] = useSound(rollFile)
    const [playMinRoll] = useSound(minRolFile)
    const [playMaxRoll] = useSound(maxRolFile)

    useEffect(() => {
        if (!rolling) return

        // Animate changing numbers
        const intervalId = setInterval(() => {
            setRollValue(Math.ceil(Math.random() * value))
        }, 80)

        const timeoutIds = []

        const roll = async () => {

            await new Promise((resolve) => {
                timeoutIds.push(
                    setTimeout(() => {
                        playRoll()
                    }, Math.random() * ROLL_VARIANCE)
                )
                timeoutIds.push(
                    setTimeout(() => {
                        resolve()
                    }, ROLL_DURATION)
                )
            })
            
            const rolledValues = Array(rollAmount).fill(0).map(i => Math.ceil(Math.random() * value))

            if (rollAmount === 1) {
                const rolledValue = rolledValues[0]
                if (rolledValue === 1) {
                    playMinRoll()
                } else if (rolledValue === value) {
                    playMaxRoll()
                }
            }

            clearInterval(intervalId)
            timeoutIds.forEach(clearTimeout)

            setRolling(false)

            const total = rolledValues.reduce((sum, value) => sum + value, 0)
            setRollValue(total)
        }

        roll()

        return () => {
            clearInterval(intervalId)
            timeoutIds.forEach(clearTimeout)
            setRolling(false)
        }
    }, [rolling, playRoll, playMinRoll, playMaxRoll, rollAmount, value])

    return (
        <div
            className='flex flex-col justify-center items-center space-y-2 transition-all'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Title>Roll {rollAmount === 1 ? 'a' : rollAmount} {id}</Title>
            <span className='relative'>
                {
                    (!rolling && hovered) &&
                    <>
                        <div className='absolute w-7 left-0 top-0 text-xl'>
                            <Bubble
                                className='bg-secondary/50'
                                onClick={() => { if (rollAmount > 1) setRollAmount(rollAmount - 1) }}
                            >
                                -
                            </Bubble>
                        </div>
                        <div className='absolute w-7 right-0 top-0 text-xl'>
                            <Bubble
                                className='bg-secondary/50'
                                onClick={() => setRollAmount(rollAmount + 1)}
                            >
                                +
                            </Bubble>
                        </div>
                    </>
                }
                <button
                    className={clsx(
                        'focus:outline-none',
                        'hover:outline-none',
                        rolling && 'animate-spin ease-in-out transition-all'
                    )}
                    onClick={() => { if (!rolling) setRolling(true) }}
                >
                    <Content id={id} />
                </button>
                {
                    rollAmount > 1 &&
                    <div className='absolute flex w-full left-0 bottom-0 z-50'>
                        <Bubble className='w-8 bg-white text-lg text-secondary pointer-events-auto border-2 border-light'>
                            {`x${rollAmount}`}
                        </Bubble>
                    </div>
                }
            </span>
            <Bubble
                className={clsx(
                    'w-9',
                    'bg-light',
                    'text-2xl',
                    !rollValue && 'opacity-0',
                    rollValue && 'opacity-100'
                )}
            >
                {rollValue}
            </Bubble>
        </div>
    )
}

export default DiceRoller