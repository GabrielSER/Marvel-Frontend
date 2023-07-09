import clsx from 'clsx'
import Carousel from '../ui/Carousell'
import CarouselImage from './CarouselImage'
import Slide from 'react-reveal/Slide'

import marvelHeroes from '../../assets/images/homeCarousell/marvelHeroes.jpg'
import marvelStories from '../../assets/images/homeCarousell/marvelStories.jpg'
import marvelLocations from '../../assets/images/homeCarousell/marvelLocations.jpg'

import { GoPerson } from 'react-icons/go'
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import { MdPlace } from 'react-icons/md'
import { useEffect, useState } from 'react'


const sections = [
    {
        title: 'Play as your favorite Marvel characters',
        image: marvelHeroes,
        icon: <GoPerson />
    },
    {
        title: 'Create your own stories',
        image: marvelStories,
        icon: <GiDiceTwentyFacesTwenty />
    },
    {
        title: 'Explore new worlds and locations',
        image: marvelLocations,
        icon: <MdPlace />
    }
]

const IndicatorIcon = (current, index) =>
    <span
        className={clsx(
            current && [
                'flex',
                'justify-center items-center',
                'p-1',
                'bg-shadow',
                'rounded-full',
                'border-2',
                'scale-x-110'
            ],
            !current && 'opacity-60'
        )}
    >
        {sections[index].icon}
    </span>

const initialSlide = 1000
const finalSlide = 10000

const HomeCarousell = () => {

    const [slideTime, setSlideTime] = useState(initialSlide)

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setSlideTime(finalSlide)
        }, sections.length * initialSlide)
        return () => clearTimeout(timeOutId)
    }, [])

    return (
        <Carousel
            className={clsx('flex h-96 w-full text-white shadow-lg')}
            slideTime={slideTime}
            indicatorIcon={IndicatorIcon}
        >
            {
                sections.map((section, index) =>
                    <Slide right key={index}>
                        <CarouselImage section={section} />
                    </Slide>
                )
            }
        </Carousel>
    )
}

export default HomeCarousell