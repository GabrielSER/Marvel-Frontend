import clsx from 'clsx'
import { useMemo } from 'react'

const titleClasses = ['comic-box-title-1', 'comic-box-title-2']

const randomTitleClass = () =>
  titleClasses[Math.floor(Math.random() * titleClasses.length)]

const ComicTitlePanel = (props) => {
  const { className, ...otherProps } = props

  const titleClass = useMemo(() => randomTitleClass(), [])

  return (
    <div
      className={clsx(
        'w-fit',
        'font-bold',
        titleClass,
        className ?? 'text-xl sm:text-2xl bg-comic-primary'
      )}
      {...otherProps}
    />
  )
}

export default ComicTitlePanel
