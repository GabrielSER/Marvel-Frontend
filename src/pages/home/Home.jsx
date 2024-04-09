import clsx from 'clsx'
import HomeCarousell from './HomeCarousell'
import HeroHome from '../common/HeroHome'

const Home = () => {
    return (
        <div className={clsx('flex flex-col w-full h-full items-center')}>
            <HomeCarousell/>
            <HeroHome />
        </div>
    )
}

export default Home