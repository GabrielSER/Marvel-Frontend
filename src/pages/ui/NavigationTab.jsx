import clsx from 'clsx'

const NavigationTab = (props) => {

  const { className, active, ...otherProps } = props

  return (
    <span
      className={clsx(
        'flex',
        'justify-center items-center',
        'p-1',
        'text-light',
        'hover:scale-105',
        'opacity-80 hover:opacity-100',
        active && ['border-b-4 border-primary', 'opacity-100'],
        'text-center',
        'cursor-pointer',
        'font-condensed',
        className
      )}
      {...otherProps}
    />
  )
}

export default NavigationTab
