import clsx from 'clsx'

const NavigationContainer = (props) => {
    return (
      <div
        className={clsx(
          'flex',
          'w-full',
          'bg-dark',
          'border-t border-t-light/10',
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