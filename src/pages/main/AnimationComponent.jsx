import { useEffect } from 'react'

import './AnimationComponent.css'

import introPagesFile from '@sound/intro-pages.mp3'

import useAudio from '@hooks/useAudio'
import { useUser } from '@contexts/UserContext'

const animationDuration = 6000

const AnimationComponent = () => {
  const { setShowAnimation } = useUser()
  useAudio(introPagesFile, true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false)
    }, animationDuration)
    return () => clearTimeout(timeoutId)
  }, [setShowAnimation])

  return (
    <div className='fixed inset-0 w-full h-full bg-red-600'>
      <div className='animation-container  text-white'>
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

export default AnimationComponent
