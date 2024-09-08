import { lineWobble } from 'ldrs'

lineWobble.register()

const LineLoader = (props) => {
  const {
    size = '100',
    stroke = 6,
    speed = '1.5',
    color = 'var(--marvel-red)',
    ...otherProps
  } = props

  return (
    <l-line-wobble
      size={size}
      stroke={stroke}
      bg-opacity='0.1'
      speed={speed}
      color={color}
      {...otherProps}
    />
  )
}

export default LineLoader
