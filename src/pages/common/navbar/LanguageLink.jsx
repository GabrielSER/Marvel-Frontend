import clsx from 'clsx'

const LanguageLink = (props) => {
  const { label, active } = props

  return (
    <button
      className={clsx(
        'text-light',
        'text-sm hover:scale-110',
        'hover:opacity-80',
        active && ['underline', 'scale-105'],
        !active && ['opacity-70']
      )}
    >
      {label}
    </button>
  )
}

export default LanguageLink
