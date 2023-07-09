import clsx from 'clsx'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import { FaCircle, FaDotCircle } from 'react-icons/fa'

import makeCarousel from 'react-reveal/makeCarousel'

const DefaultIndicatorIcon = (current) =>
    current ? <FaDotCircle /> : <FaCircle />

const IndicatorItem = (props) => {

    const properties = { ...props }
    delete properties.className

    return (
        <span
            className={clsx(
                'items-center',
                'justify-center',
                'aspect-square',
                'hover:scale-125',
                'text-3xl',
                'focus:outline-none',
                props.className
            )}
            {...properties}
        />
    )
}

const IndicatorContainer = (props) => {

    const {
        position,
        total,
        handleClick,
        indicatorIcon
    } = props

    return (
        <div
            className={clsx(
                'flex absolute',
                'z-10',
                'bottom-0',
                'justify-center items-center',
                'w-full h-14',
                'space-x-4'
            )}
        >
            {

                Array(...Array(total)).map((_, index) =>
                    <IndicatorItem
                        key={index}
                        onClick={handleClick}
                        data-position={index}
                    >
                        {(indicatorIcon ?? DefaultIndicatorIcon)(index === position, index)}
                    </IndicatorItem>
                )
            }
        </div>
    )
}


const Arrow = (props) => {

    const properties = { ...props }
    delete properties.className

    return (
        <button
            className={clsx(
                'flex',
                'absolute',
                'z-10',
                'items-center',
                'justify-center',
                'w-16',
                'h-full',
                'text-3xl',
                'focus:outline-none',
                props.className
            )}
            {...properties}
        />
    )
}

const CarouselUI = (
    className,
    indicators,
    indicatorIcon
) => (props) => {

    const {
        position,
        total,
        handleClick,
        children
    } = props

    return (
        <div
            className={clsx(
                'overflow-hidden',
                'relative',
                className
            )}
        >
            {children}
            <Arrow
            className='hover:bg-gradient-to-l hover:from-transparent hover:to-shadow'
                onClick={handleClick}
                data-position={position - 1}
            >
                <BsChevronCompactLeft />
            </Arrow>
            <Arrow
                className='right-0 hover:bg-gradient-to-r hover:from-transparent hover:to-shadow'
                onClick={handleClick}
                data-position={position + 1}
            >
                <BsChevronCompactRight />
            </Arrow>
            {
                indicators &&
                <IndicatorContainer
                    position={position}
                    total={total}
                    handleClick={handleClick}
                    indicatorIcon={indicatorIcon}
                />
            }
        </div>
    )
}

const Carousel = (props) => {

    const {
        elements = props.children,
        className,
        slideTime = 5000,
        autoSlide = true,
        slideTurns = 10,
        indicators = true,
        indicatorIcon
    } = props

    const CarouselWrapper = makeCarousel(
        CarouselUI(
            className,
            indicators,
            indicatorIcon
        )
    )

    return (
        <CarouselWrapper
            defaultWait={slideTime}
            maxTurns={slideTurns}
            swipe={autoSlide}
            children={elements}
        />
    )
}

export default Carousel