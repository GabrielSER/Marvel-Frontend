import { Suspense } from 'react'
import HomeCarousell from './HomeCarousell'
import HeroHome from './hero/HeroHome'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import { Link } from 'react-router-dom'

const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This adds a smooth scrolling effect
    })
  }

  return (
    <>
      <HomeCarousell />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-56 px-2 py-10">
        {/* New Player Section */}

        <div className="flex flex-col items-center bg-gradient-to-b from-yellow-400 to-amber-500 text-black rounded-2xl shadow-[4px_4px_0_#000] border-4 border-black p-6 hover:scale-105 hover:rotate-1 transition-transform duration-300">
          <Link
            onClick={scrollToTop}
            to='/player'
          >
            <p className="text-xl font-extrabold uppercase mb-2 drop-shadow-[2px_2px_0_#fff]">
              New Player?
            </p>
            <ComicTitlePanel>Start Your Adventure!</ComicTitlePanel>
          </Link>
        </div>

        {/* Game Master Section */}
        <div className="flex flex-col items-center bg-gradient-to-b from-red-600 to-red-800 text-black rounded-2xl shadow-[4px_4px_0_#000] border-4 border-black p-6 hover:scale-105 hover:-rotate-1 transition-transform duration-300">
          <Link
            onClick={scrollToTop}
            to='/rules'
          >
            <p className="text-xl font-extrabold uppercase mb-2 drop-shadow-[2px_2px_0_#fff]">
              Want to Lead as the One Above All?
            </p>
            <ComicTitlePanel>Take the Helm!</ComicTitlePanel>
          </Link>
        </div>
      </div >


      <Suspense>
        <HeroHome />
      </Suspense>
    </>
  )
}

export default Home
