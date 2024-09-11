import clsx from 'clsx'
import LineLoader from './LineLoader'

const MarvelLoader = () => {
  return (
    <div
      className={clsx(
        'fixed',
        'flex flex-col',
        'justify-center items-center',
        'w-full h-screen',
        'backdrop-blur-xl',
        'text-5xl font-marvel',
        'text-marvel-red',
        'z-max',
        'bg-white/90',
        'overflow-x-hidden overflow-y-hidden',
        'pointer-events-auto',
        'cursor-wait'
      )}
    >
      MARVEL
      <LineLoader />
    </div>
  )
}

export default MarvelLoader
