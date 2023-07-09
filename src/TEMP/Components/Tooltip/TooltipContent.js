import classNames from 'classnames'

export default function TooltipContent({
  show,
  children,
  top,
  left,
}) {
  return (
    <div
      className={classNames(
        show ? 'block' : 'hidden',
        'absolute transform -translate-x-1/2 z-50 p-3 rounded-lg bg-gray-800 text-white w-max',
      )}
      style={{ 
        top: top,
        left: left,
      }}
    >
      {children}
    </div>
  )
}