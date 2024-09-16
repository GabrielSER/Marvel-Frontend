import clsx from 'clsx'

const Circular = (props) => {
  const { className, ...otherProps } = props
  
  return (
    <div
      className={clsx(
        'flex',
        'justify-center',
        'items-center',
        'aspect-square',
        'rounded-full',
        'hover:scale-110',
        'focus:outline-none',
        'overflow-x-hidden',
        'overflow-y-hidden',
        className
      )}
      {...otherProps}
    />
  )
}

export default Circular
