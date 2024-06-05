import clsx from 'clsx'
import Input from './Input'

const UIInput = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <Input
      className={clsx(
        'px-3 py-1',
        'border border-light-2',
        'hover:border-light/50',
        'focus:border-light',
        'caret-primary',
        'bg-transparent',
        'rounded-md',
        'font-condensed uppercase',
        'focus:outline-none',
        'outline-none',
        clsx(className)
      )}
      {...properties}
    />
  )
}

export default UIInput
