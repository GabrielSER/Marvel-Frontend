import clsx from 'clsx'
import LazyImage from '../ui/LazyImage'

const CharacterCard = ({ character, showStatus }) => {
  const { name, image, logo, v2, v3 } = character

  const imagePlaceholder = (
    <div className='w-full h-full flex flex-col items-center justify-center font-marvel text-white text-xl bg-gradient-to-r from-red-600 to-red-900'>
      <span className='uppercase'>{name}</span>
      <div
        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      >
        <span className='sr-only'>Loading...</span>
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
        'snap-center',
        'z-page'
      )}
    >

      {/* ✅ Green check for v2 */}
      {showStatus && v2 && (
        <div className="absolute top-1 right-1 z-30 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md">
          ✓
        </div>
      )}
      {/* ✅ Yellow check for v2 */}
      {showStatus && v3 && (
        <div className="absolute top-1 right-1 z-30 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md">
          |
        </div>
      )}

      {!v3 && !v2 && showStatus && (
        <div className="absolute top-1 right-1 z-30 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md">
          X
        </div>
      )}
      {/* Background image */}
      <LazyImage
        src={image}
        alt={name}
        className='w-full h-full object-cover'
        imageClassname='w-full h-full object-cover'
        placeholder={imagePlaceholder}
      />

      {/* Logo overlay */}
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
