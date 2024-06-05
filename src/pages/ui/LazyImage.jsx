import { useState, useEffect } from 'react'
import clsx from 'clsx'
import LazyLoad from 'react-lazy-load'

const LazyImage = ({
  src,
  alt = 'image',
  className,
  imageClassname,
  placeholder,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <LazyLoad className={clsx(className)}>
      <div className='relative w-full h-full'>
        {!isLoaded && (
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            {placeholder}
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={clsx(imageClassname, {
            hidden: !isLoaded,
            'flip-in': isLoaded
          })}
          onLoad={() => {
            setIsLoaded(true)
            if (onLoad) onLoad()
          }}
        />
      </div>
    </LazyLoad>
  )
}

export default LazyImage
