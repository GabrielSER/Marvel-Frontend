import { useCallback, useEffect, useState } from 'react'
import { useDices } from '../../../../contexts/DicesContext'
import DiceButton from './DiceButton'

import rollFile from '../../../../assets/sound/dice-roll.mp3'
import minRolFile from '../../../../assets/sound/dice-min.mp3'
import maxRolFile from '../../../../assets/sound/dice-max.mp3'
import useSound from 'use-sound'
import clsx from 'clsx'

const ROLL_VARIANCE = 200
const ROLL_DURATION = 1000
const ROLL_DURATION_EXTRA = 2000


const Bubble = (props) => {

  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <label
      className={clsx(
        'absolute',
        'z-hud',
        'flex justify-center items-center',
        'w-7 h-7',
        'text-primary font-semibold',
        'font-mono',
        'rounded-full',
        'border border-dark',
        'select-none',
        'pointer-events-none',
        className
      )}
      {...properties}
    />
  )
}

const RollDice = (props) => {

  const { key, diceType } = props
  const properties = { ...props }

  const [rolling, setRolling] = useState(false)
  const [rollValue, setRollValue] = useState(null)
  const [hovered, setHovered] = useState(false)

  const {
    updateTotal,
    removeRoll,
    rollingDices,
    resetDices
  } = useDices()

  const [playRoll] = useSound(rollFile)
  const [playMinRoll] = useSound(minRolFile)
  const [playMaxRoll] = useSound(maxRolFile)

  const updateResult = (result) => {
    updateTotal(result)
  }

  useEffect(() => {
    if (!resetDices) return
    setRollValue(null)
  }, [resetDices, setRollValue])

  useEffect(() => {
    if (!rollingDices) return
    setRolling(true)
  }, [rollingDices, setRolling])

  useEffect(() => {
    if (!rolling) return

    // Animate changing numbers
    const intervalId = setInterval(() => {
      setRollValue(Math.ceil(Math.random() * diceType.value))
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
          }, ROLL_DURATION + (Math.random() * ROLL_DURATION_EXTRA))
        )
      })

      const rolledValue = Math.ceil(Math.random() * diceType.value)

      if (rolledValue === 1) {
        playMinRoll()
      } else if (rolledValue === diceType.value) {
        playMaxRoll()
      }

      clearInterval(intervalId)
      timeoutIds.forEach(clearTimeout)

      setRolling(false)
      setRollValue(rolledValue)
      updateResult(rolledValue)
    }

    roll()

    return () => {
      clearInterval(intervalId)
      timeoutIds.forEach(clearTimeout)
      setRolling(false)
    }
  }, [rolling, playRoll, playMinRoll, playMaxRoll])

  return (
    <div
      className={clsx(
        'relative',
        'flex justify-center items-center'
      )}
    >
      {
        rollValue &&
        <Bubble className='bg-white'>
          {rollValue}
        </Bubble>
      }
      <DiceButton
        className={clsx(
          rolling && 'animate-spin ease-in-out transition-all'
        )}
        onClick={() => removeRoll(key)}
        {...properties}
      />
    </div>
  )
}

export default RollDice