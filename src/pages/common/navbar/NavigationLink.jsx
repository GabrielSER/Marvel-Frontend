import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import NavigationTab from '../../ui/NavigationTab'
import tickSound from '../../../assets/sound/tick.mp3'
import useSound from 'use-sound'

const NavigationLink = (props) => {
  const { text, to } = props

  const location = useLocation()
  const [playTick] = useSound(tickSound)

  return (
    <Link
      className={clsx(
        'flex',
        'justify-center items-center',
        'w-max',
        'px-3 pt-2',
        'bg-dark',
        'font-condensed font-bold',
        'text-center'
      )}
      to={to}
      onMouseEnter={playTick}
    >
      <NavigationTab active={location.pathname === to}>
        {text.toUpperCase()}
      </NavigationTab>
    </Link>
  )
}

export default NavigationLink
