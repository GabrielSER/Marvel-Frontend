import clsx from 'clsx'

import { useApplication } from '@contexts/ApplicationContext'
import { useUser } from '@contexts/UserContext'

import MarvelLoader from '@ui/MarvelLoader'
import ComicBackground from '@ui/ComicBackground'
import AnimationComponent from './AnimationComponent'
import HUD from './hud/HUD'
import StateBar from './header/statebar/StateBar'
import Navbar from './header/navbar/Navbar'
import MainBodyRoutes from './MainBodyRoutes'
import Footer from './footer/Footer'

const MainBody = () => {

  const { loading } = useApplication()
  const { isLoggedIn, showAnimation } = useUser()

  if (showAnimation) {
    return <AnimationComponent />
  }

  return (
    <ComicBackground
      className={clsx(
        'relative flex flex-col flex-initial',
        'inset-0 min-h-screen',
        'overflow-x-hidden overflow-y-hidden',
        'snap-y snap-mandatory',
        'font-comic'
      )}
    >
      <StateBar />
      {(!isLoggedIn || loading) && <MarvelLoader />}
      <HUD />
      <Navbar />
      <div
        className={clsx(
          'flex flex-col flex-grow',
          'w-full',
          'overflow-x-hidden overflow-y-hidden'
        )}
      >
        <MainBodyRoutes />
      </div>
      <Footer />
    </ComicBackground>
  )
}

export default MainBody
