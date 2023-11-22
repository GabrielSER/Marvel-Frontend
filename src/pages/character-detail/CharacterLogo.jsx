import clsx from 'clsx'
import { useCharacter } from '../../contexts/CharacterContext'
import LazyImage from '../ui/LazyImage'

const CharacterLogo = () => {

    const { character } = useCharacter()

    return (
        <LazyImage
            src={character.logo}
            alt={character.name}
            className={clsx(
                'p-8',
                'w-full md:max-w-xl',
                'self-center hover:scale-105',
                'ease-in-out transition-all'
            )}
            imageClassname='w-full'
        />
    )
}

export default CharacterLogo