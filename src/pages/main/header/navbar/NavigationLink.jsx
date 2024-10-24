import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import NavigationTab from '@ui/NavigationTab'
import tickSound from '@assets/sound/tick.mp3'
import useSound from 'use-sound'
import { useMemo } from 'react'

const firstLevelRegex = /(\/[^/]+).*/

const NavigationLink = (props) => {
  const { text, to } = props

  const location = useLocation()
  const [playTick] = useSound(tickSound)

  const firstPath = useMemo(() =>
    location.pathname.replace(firstLevelRegex, '$1'),
    [location.pathname]
  )

  return (
    <Link
      className={clsx(
        'flex',
        'justify-center items-center',
        'w-max h-12',
        'px-3 pt-2',
        'bg-dark',
        'font-condensed font-bold',
        'text-center whitespace-nowrap',
        'snap-start'
      )}
      to={to}
      onMouseEnter={playTick}
    >
      <NavigationTab active={firstPath === to}>
        {text.toUpperCase()}
      </NavigationTab>
    </Link>
  )
}

export default NavigationLink
