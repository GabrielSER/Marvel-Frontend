import { Suspense } from 'react'
import HomeCarousell from './HomeCarousell'
import HeroHome from './hero/HeroHome'

const Home = () => {

  return (
    <>
      <HomeCarousell />
      <Suspense>
        <HeroHome />
      </Suspense>
    </>
  )
}

export default Home
