import clsx from 'clsx'
import LazyImage from '../ui/LazyImage'

const CharacterCard = (props) => {

    const { character } = props
    const { name, image, logo } = character

    return (
        <div
            className={clsx(
                'flex',
                'relative',
                'w-52 h-80',
                'rounded-md',
                'hover:scale-105',
                'overflow-hidden'
            )}
        >
            <LazyImage
                src={image}
                alt={name}
                className='w-full h-full object-cover'
                imageClassname='w-full h-full object-cover'
            />
            <LazyImage
                src={logo}
                alt={`${name}'s logo`}
                className={clsx(
                    'flex absolute',
                    'w-full bottom-0 justify-center',
                    'z-20',
                    'p-2'
                )}
            />
        </div>
    )
}

export default CharacterCard