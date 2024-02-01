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