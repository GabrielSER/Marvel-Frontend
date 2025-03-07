import clsx from 'clsx'
import MarvelLogo from '@ui/MarvelLogo'

const Banner = () => {

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-center items-center',
        'p-2',
        'space-y-2',
        'text-2xl',
        'text-white',
        'font-bold font-condensed'
      )}
    >
      <h1 className='hover:text-red-700'>
        {"ALL NEW"}
      </h1>
      <MarvelLogo className='h-[20vh]' />
      <h1>{"ROLEPLAYING GAME"}</h1>
    </div>
  )
}

export default Banner
