import { useEffect } from 'react'
import './AnimationComponent.css' // Your CSS file

const AnimationComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 6000) // 5 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className='bg-red-600'>
      <div className='animation-container  text-white'>
        <input
          className='retrigger'
          type='radio'
          name='rerun'
          id='retrigger--1'
        />
        <input
          className='retrigger'
          type='radio'
          name='rerun'
          id='retrigger--2'
          checked='checked'
        />
        <div className='bg'></div>
        <div className='pane'>
          <div className='rotate'>
            <div className='logo font-marvel font-extralight'>MARVEL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationComponent // Make sure to export the component
