import clsx from 'clsx'
import { useState } from 'react'

const ComicBackground = (props) => {
  const {className, children, ...otherProps} = props
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={clsx(
        'flex flex-col flex-initial',
        'w-full h-full',
        'overflow-x-hidden overflow-y-hidden',
        'overscroll-none',
        'font-comic',
        isLoaded && 'bg-cover bg-no-repeat',
        className
      )}
      style={{
        backgroundImage: isLoaded
          ? 'url(https://i.ibb.co/Jqr4f35/backgound.png)'
          : 'none'
      }}
      {...otherProps}
    >
      <img
        className='hidden'
        src='https://i.ibb.co/Jqr4f35/backgound.png'
        alt='background'
        onLoad={() => setIsLoaded(true)}
      />
      {children}
    </div>
  )
}

export default ComicBackground
