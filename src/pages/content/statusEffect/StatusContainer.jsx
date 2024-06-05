import clsx from 'clsx'

const StatusContainer = (props) => {
  const { reverse } = props
  const properties = { ...props }
  delete properties.reverse
  return (
    <div
      className={clsx(
        'flex md:flex-row gap-4',
        !reverse && 'flex-col',
        reverse && 'flex-col-reverse'
      )}
      {...properties}
    />
  )
}

export default StatusContainer
