import clsx from 'clsx'

const StatLogo = (props) => {
  const { image, text } = props

  return (
    <div
      className={clsx(
        'relative',
        'flex',
        'w-20 h-20',
        'justify-center items-center',
        'hover:scale-110 ease-in-out transition-all'
      )}
    >
      <img
        className='w-full h-full'
        src={image}
        alt={text}
      />
      <span
        className={clsx(
          'absolute',
          'flex',
          'items-center justify-center',
          'w-8 h-8',
          'bg-light/70',
          'rounded-full',
          'text-xl font-bold font-condensed'
        )}
      >
        {text}
      </span>
    </div>
  )
}

export default StatLogo
