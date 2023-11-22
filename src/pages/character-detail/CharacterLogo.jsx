import { useCharacter } from '../../contexts/CharacterContext'
import LazyImage from '../ui/LazyImage'

const CharacterLogo = () => {
    
    const { character } = useCharacter()

    return (
        <LazyImage
            src={character.logo}
            alt={character.name}
            className='w-80 self-center sm:mx-0 mx-5 py-4 hover:scale-105'
            imageClassname='w-full'
        />
    )
}

export default CharacterLogo