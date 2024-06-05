import clsx from 'clsx'
import LazyImage from '../ui/LazyImage'

const CharacterCard = ({ character }) => {
  const { name, image, logo } = character

  const imagePlaceholder = (
    <div className='w-full h-full flex flex-col items-center justify-center font-marvel text-white text-xl bg-gradient-to-r from-red-600 to-red-900'>
      <span className='uppercase'>{name}</span>
      <div
        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  )

  const logoPlaceholder = (
    <div className='w-full h-full flex items-center text-center font-marvel text-white justify-cente'>
      <span>MARVEL</span>
    </div>
  )

  return (
    <div
      className={clsx(
        'flex',
        'relative',
        'w-52 h-80',
        'rounded-md',
        'hover:scale-105',
        'overflow-hidden',
        'z-40'
      )}
    >
      <LazyImage
        src={image}
        alt={name}
        className='w-full h-full object-cover'
        imageClassname='w-full h-full object-cover'
        placeholder={imagePlaceholder}
      />
      <LazyImage
        src={logo}
        alt={`${name}'s logo`}
        className={clsx(
          'flex absolute',
          'w-full bottom-0 justify-center',
          'z-20',
          'p-2'
        )}
        imageClassname='w-full h-full object-cover'
        placeholder={logoPlaceholder}
      />
    </div>
  )
}

export default CharacterCard
