import clsx from 'clsx'
import { useEffect, useState } from 'react'

const Tooltip = (props) => {
  const {
    className,
    children,
    content,
    top = false,
    bottom = false,
    left = false,
    right = false
  } = props

  const properties = { ...props }

  delete properties.children
  delete properties.content
  delete properties.top
  delete properties.bottom
  delete properties.left
  delete properties.right
  delete properties.className

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!hovered) return

    const timeOutId = setTimeout(() => {
      setHovered(false)
    }, 3000)

    return () => clearTimeout(timeOutId)
  }, [hovered, setHovered])

  return (
    <div
      className='relative flex'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <div
        className={clsx(
          'z-hud',
          'absolute flex',
          'w-full h-full',
          'justify-center items-center',
          'transition-transform hover:scale-105',
          'pointer-events-none',
          className
        )}
        {...properties}
      >
        <div
          className={clsx(
            'z-hud',
            'absolute',
            hovered ? 'flex' : 'hidden',
            top && 'bottom-full mb-1.5',
            left && 'right-full mr-1.5',
            right && 'left-full ml-1.5',
            bottom && 'top-full mt-1.5',
            'py-2 px-4',
            'text-xs',
            'whitespace-nowrap',
            'dark-box',
            'transition-all animate-fadeout ease-in-out',
            'cursor-default'
          )}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

export default Tooltip
