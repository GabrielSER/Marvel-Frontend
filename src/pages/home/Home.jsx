import clsx from 'clsx'
import HomeCarousell from './HomeCarousell'

const Home = () => {
    return (
        <div
            className={
                clsx('flex flex-col w-full h-full items-center')
            }
        >
            <HomeCarousell/>
        </div>
    )
}

export default Home