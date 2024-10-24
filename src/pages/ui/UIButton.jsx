import useSound from 'use-sound'
import tickSound from '@sound/tick.mp3'
import clsx from 'clsx'

const UIButton = (props) => {
  const { 
    className,
    centered = true,
    uppercase = true,
     ...otherProps 
    } = props

  const [playTick] = useSound(tickSound)

  return (
    <button
      className={clsx(
        'flex',
        'items-center',
        centered && 'justify-center',
        'ui-box',
        'rounded-md',
        'hover:scale-105',
        'text-white',
        'font-condensed',
        uppercase && 'uppercase',
        className
      )}
      onMouseEnter={playTick}
      {...otherProps}
    />
  )
}

export default UIButton
