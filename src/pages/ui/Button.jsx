import clsx from 'clsx'

const Button = (props) => {
  const { className } = props
  const properties = { ...props }
  delete properties.className

  return (
    <button
      className={clsx('hover:outline-none', 'focus:outline-none', className)}
      {...properties}
    />
  )
}

export default Button
