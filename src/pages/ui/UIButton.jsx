import useSound from 'use-sound'
import tickSound from '../../assets/sound/tick.mp3'
import clsx from 'clsx'

const UIButton = (props) => {

    const { className } = props

    const properties = { ...props }
    delete properties.className

    const [playTick] = useSound(tickSound)

    return (
        <button
            className={clsx(
                'flex',
                'justify-center items-center',
                'ui-box',
                'rounded-md',
                'hover:scale-105',
                'text-white',
                'font-condensed uppercase',
                className
            )}
            onMouseEnter={playTick}
            {...properties}
        />
    )
}

export default UIButton