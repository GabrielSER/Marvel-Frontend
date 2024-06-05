import clsx from 'clsx'
import Tooltip from '../../ui/Tooltip'
import { useToolbar } from '../../../contexts/ToolbarContext'
import { useCallback } from 'react'
import tickSound from '../../../assets/sound/tick.mp3'
import useSound from 'use-sound'
import UIButton from '../../ui/UIButton'

const ToolbarIcon = (props) => {
  const { toolbar, children } = props

  const { name, icon } = toolbar

  const {
    currentToolbar,
    currentToolbarData,
    setCurrentToolbarData,
    minimize
  } = useToolbar()

  const [playTick] = useSound(tickSound)

  const openToolbar = useCallback(() => {
    setCurrentToolbarData(toolbar, children)
  }, [setCurrentToolbarData, toolbar, children])

  const handleClick = useCallback(() => {
    const isCurrentlyOpen = currentToolbarData?.toolbar?.id === toolbar?.id
    if (isCurrentlyOpen) {
      minimize()
    } else {
      openToolbar()
    }
  }, [currentToolbarData, toolbar, minimize, openToolbar])

  return (
    <Tooltip
      className='text-light'
      content={name}
    >
      <span
        className={clsx(
          toolbar.id === currentToolbar?.id && [
            'rounded-md border-t-2 border-primary'
          ]
        )}
      >
        <UIButton
          className={clsx(
            'flex',
            'h-full',
            'justify-center items-center',
            'aspect-square',
            'text-[2.5rem]'
          )}
          onClick={handleClick}
          onMouseEnter={playTick}
        >
          {icon}
        </UIButton>
      </span>
    </Tooltip>
  )
}

export default ToolbarIcon
