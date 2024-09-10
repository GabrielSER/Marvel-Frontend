import { useState, useEffect, useRef } from 'react'

// Assuming percentage ranges from 0 to 8
const maxStatValue = 8

const StatPower = ({ strokeWidth, percentage, statColor }) => {
  const radius = 40 - strokeWidth / 2
  const pathDescription = `
    M 50,50 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `

  const diameter = Math.PI * 2 * radius

  // Initialize with diameter
  const [offset, setOffset] = useState(diameter)

  // Ref to the SVG element
  const svgRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect()
        const isSvgInView = rect.top < window.innerHeight && rect.bottom >= 0

        if (isSvgInView) {
          const progress = percentage / maxStatValue
          const offsetValue = diameter - progress * diameter

          setOffset(offsetValue)
        }
      }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Initial check on mount
    handleScroll()

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [percentage, diameter])

  return (
    <div className='stat-power-container hover:scale-110 ease-in-out transition-all'>
      <svg
        className='CircularProgressbar'
        viewBox='0 0 100 100'
        width={80}
        height={80}
        ref={svgRef}
      >
        <path
          className='CircularProgressbar-trail'
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={{
            stroke: '#d6d6d6'
          }}
        />

        <path
          className='CircularProgressbar-path'
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={{
            stroke: statColor,
            strokeLinecap: 'round',
            strokeDasharray: `${diameter}px ${diameter}px`,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease-in-out'
          }}
        />
        <text
          className='CircularProgressbar-text text-3xl font-condensed'
          x={50}
          y={50}
          style={{
            fill: 'black',
            dominantBaseline: 'central',
            textAnchor: 'middle'
          }}
        >
          {`${percentage}`}
        </text>
      </svg>
    </div>
  )
}

export default StatPower
