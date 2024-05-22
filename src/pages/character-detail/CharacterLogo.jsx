import clsx from 'clsx'
import { useCharacter } from '../../contexts/CharacterContext'
import LazyImage from '../ui/LazyImage'

const CharacterLogo = () => {

    const { character } = useCharacter()

    const imagePlaceholder = (
        <div className="w-full h-full flex flex-col items-center justify-center font-marvel text-red-500 text-7xl bg-gradient-to-r from-red-600 to-red-900">
            <span className='uppercase'>{character.name}</span>
        </div>
    );


    return (
        <LazyImage
            src={character.logo}
            alt={character.name}
            className={clsx(
                'p-8',
                'w-full sm:max-w-md',
                'self-center hover:scale-105',
                'ease-in-out transition-all'
            )}
            imageClassname='w-full'
            placeholder={imagePlaceholder}
        />
    )
}

export default CharacterLogo