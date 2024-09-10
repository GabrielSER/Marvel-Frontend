import clsx from 'clsx'

import { useUser } from '@contexts/UserContext'

import MarvelLoader from '@ui/MarvelLoader'
import ComicBackground from '@ui/ComicBackground'
import AnimationComponent from './AnimationComponent'
import HUD from './hud/HUD'
import Navbar from './navbar/Navbar'
import MainBodyRoutes from './MainBodyRoutes'
import Footer from './footer/Footer'

const MainBody = () => {
  const { isLoggedIn, showAnimation } = useUser()

  if (!isLoggedIn) {
    return <MarvelLoader />
  }

  if (showAnimation) {
    return <AnimationComponent />
  }

  return (
    <ComicBackground>
      <HUD />
      <Navbar />
      <div
        className={clsx(
          'flex flex-col',
          'w-full h-full shrink-0 grow-0',
          'overflow-x-hidden overflow-y-hidden'
        )}
      >
        <MainBodyRoutes />
        <Footer />
      </div>
    </ComicBackground>
  )
}

export default MainBody
