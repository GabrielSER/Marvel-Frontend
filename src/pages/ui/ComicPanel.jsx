import clsx from 'clsx'
import { useState, useEffect } from 'react'

const boxClasses = [
  'comic-box-1',
  'comic-box-2',
  'comic-box-3'
]

const randomBoxClass = () =>
  boxClasses[Math.floor(Math.random() * boxClasses.length)]

const ComicPanel = (props) => {

  const { className } = props
  const properties = { ...props }
  delete properties.className

  const [boxClass, setBoxClass] = useState(randomBoxClass())


  useEffect(() => {
    const randomIntervalFrequency = 4000 + (Math.random() * 10000)
    const intervalId = setInterval(() => {
      setBoxClass(randomBoxClass())
    }, randomIntervalFrequency)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className={clsx(
        'comic-box',
        boxClass,
        className ?? 'bg-comic-secondary'
      )}
      {...properties}
    />
  )

}

export default ComicPanel;