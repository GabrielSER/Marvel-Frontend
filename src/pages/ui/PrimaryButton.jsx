import Button from './Button'
import clsx from 'clsx'

const PrimaryButton = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <Button
      className={clsx(
        'px-3 py-1',
        'bg-primary',
        'text-white',
        'border border-dark',
        'rounded-l-full',
        'rounded-r-full',
        'disabled:cursor-not-allowed',
        'font-bold',
        className
      )}
      {...properties}
    />
  )
}

export default PrimaryButton
