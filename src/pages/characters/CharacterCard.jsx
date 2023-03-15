import clsx from 'clsx'

const CharacterCard = (props) => {

    const { character } = props
    const { image, logo } = character

    return (
        <div
            className={clsx(
                'flex',
                'relative',
                'w-52 h-80',
                'object-contain',
                'rounded-md',
                'hover:scale-105',
                'overflow-hidden'
            )}
        >
            <img
                src={image}
                alt='logo'
                className={clsx(
                    ''
                )}
            />
            <img
                src={logo}
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