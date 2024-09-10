import clsx from 'clsx'
import ComicTitlePanel from './ComicTitlePanel'

const Title = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <ComicTitlePanel className='bg-comic-secondary self-center'>
      <h2
        className={clsx('text-xl font-semibold text-center', className)}
        {...properties}
      />
    </ComicTitlePanel>
  )
}

export default Title
