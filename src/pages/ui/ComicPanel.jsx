import { useState, useEffect } from 'react'
import clsx from 'clsx'

const boxClasses = ['comic-box-1', 'comic-box-2', 'comic-box-3']

const ComicPanel = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  const [boxClass, setBoxClass] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const isXsScreen = window.innerWidth <= 600
      const newBoxClass = isXsScreen
        ? 'comic-box-4'
        : boxClasses[Math.floor(Math.random() * boxClasses.length)]
      setBoxClass(newBoxClass)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={clsx('comic-box', boxClass, className ?? 'bg-comic-secondary')}
      {...properties}
    />
  )
}

export default ComicPanel
