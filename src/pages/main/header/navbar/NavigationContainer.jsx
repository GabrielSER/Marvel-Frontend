import clsx from 'clsx'

const NavigationContainer = (props) => {
  return (
    <div
      className={clsx(
        'flex',
        'justify-center',
        'w-full',
        'border-t border-t-light-2',
        'overflow-x-auto',
        'overflow-y-hidden',
        'hide-scroll'
      )}
    >
      {props.children}
    </div>
  )
}

export default NavigationContainer
