import clsx from 'clsx'

const NavigationContainer = (props) => {
  return (
    <div
      className={clsx(
        'flex',
        'justify-around',
        'w-full',
        'border-t border-t-light-2',
        'overflow-x-scroll',
        'overflow-y-hidden',
        'snap-x snap-proximity',
        'hide-scroll'
      )}
    >
      {props.children}
    </div>
  )
}

export default NavigationContainer
