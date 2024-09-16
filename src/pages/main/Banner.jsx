import clsx from 'clsx'
import logo from '@assets/logos/marvel.png'

const Banner = () => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-center items-center',
        'p-2 pt-16',
        'space-y-2',
        'text-2xl',
        'text-white',
        'font-bold font-condensed'
      )}
    >
      <h1 className='hover:text-red-700'>ALL-NEW</h1>
      <img
        src={logo}
        alt='Marvel Logo'
      />
      <h1>Roleplaying Game</h1>
    </div>
  )
}

export default Banner
