import clsx from 'clsx'

const HomeContainer = (props) => {
  const { reverse } = props
  const properties = { ...props }
  delete properties.reverse
  return (
    <div
      className={clsx(
        'flex md:flex-row gap-4',
        !reverse && 'flex-col',
        reverse && 'flex-col-reverse justify-self-end'
      )}
      {...properties}
    />
  )
}

export default HomeContainer
