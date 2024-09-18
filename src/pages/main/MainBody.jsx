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
    <div
      className={clsx(
        'relative flex flex-col flex-initial',
        'inset-0 w-full h-full',
        'overflow-x-hidden overflow-y-hidden'
      )}
    >
      <StateBar />
      <div
        className={clsx(
          'flex flex-col',
          'inset-0 w-full h-full shrink-0 grow-0',
          'overflow-x-hidden overflow-y-auto'
        )}
      >
        <ComicBackground>
          {(!isLoggedIn || loading) && <MarvelLoader />}
          <HUD />
          <Navbar />
          <MainBodyRoutes />
          <Footer />
        </ComicBackground>
      </div>
    </div>
  )
}

export default MainBody
