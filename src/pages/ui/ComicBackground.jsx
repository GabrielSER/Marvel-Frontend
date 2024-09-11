import clsx from 'clsx'
import { useState } from 'react'

const ComicBackground = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={clsx(
        'relative',
        'flex flex-col flex-initial',
        'w-full h-full',
        'overflow-x-hidden overflow-y-hidden',
        'overscroll-none',
        'font-comic',
        isLoaded && 'bg-cover bg-no-repeat'
      )}
      style={{
        backgroundImage: isLoaded
          ? 'url(https://i.ibb.co/Jqr4f35/backgound.png)'
          : 'none'
      }}
    >
      <img
        className='hidden'
        src='https://i.ibb.co/Jqr4f35/backgound.png'
        alt='background'
        onLoad={() => setIsLoaded(true)}
      />
      {props.children}
    </div>
  )
}

export default ComicBackground
