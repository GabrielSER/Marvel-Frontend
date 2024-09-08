import clsx from 'clsx'
import LineLoader from './LineLoader'

const MarvelLoader = () => {
  return (
    <div className='fixed w-full h-screen'>
      <div
        className={clsx(
          'flex flex-col',
          'justify-center items-center',
          'w-full h-full',
          'backdrop-blur-sm',
          'text-5xl font-marvel',
          'text-marvel-red'
        )}
      >
        MARVEL
        <LineLoader />
      </div>
    </div>
  )
}

export default MarvelLoader
