import clsx from 'clsx'
import { useState } from 'react'

const ComicBackground = (props) => {
  const { className, children, ...otherProps } = props
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={clsx(
        'flex flex-col',
        'w-full min-h-screen',
        isLoaded && 'bg-repeat',
        className
      )}
      style={{
        backgroundImage: isLoaded
          ? 'url(https://i.ibb.co/Jqr4f35/backgound.png)'
          : 'none',
        backgroundSize: 'auto', // important to avoid scaling/stretching
        backgroundPosition: 'top left' // or 'center' if you want it aligned
      }}
      {...otherProps}
    >
      <img
        className="hidden"
        src="https://i.ibb.co/Jqr4f35/backgound.png"
        alt="background"
        onLoad={() => setIsLoaded(true)}
      />
      {children}
    </div>
  )
}

export default ComicBackground
