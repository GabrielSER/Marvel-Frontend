import { useEffect } from 'react'
import './AnimationComponent.css' // Your CSS file

const AnimationComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 6000) // 5 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className='bg-red-600 font-marvel'>
      <div className='animation-container  text-white'>
        <div className='bg'></div>
        <div className='pane'>
          <div className='rotate'>
            <div className='logo font-extralight'>MARVEL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationComponent // Make sure to export the component
