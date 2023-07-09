import clsx from 'clsx'
import Slide from 'react-reveal/Slide'

const CarouselImage = (props) => {

    const { section } = props
    const { image, title } = section

    return (
        <div
            className={clsx(
                'flex relative',
                'w-full h-full',
                'justify-center items-center',
                'overflow-hidden'
            )}
        >
            <Slide left>
                    <h1
                        className={clsx(
                            'flex',
                            'absolute',
                            'text-center',
                            'text-4xl p-4 rounded-l-full',
                            'rounded-r-full',
                            'bg-shadow'
                        )}
                    >
                        {title}
                    </h1>
                </Slide>
            <img
                className='flex w-full h-full object-cover'
                src={image}
                alt={title}
            />
        </div>
    )
}

export default CarouselImage