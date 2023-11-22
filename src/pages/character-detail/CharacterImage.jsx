import clsx from 'clsx'
import { useCharacterDetail } from '../../contexts/CharacterDetailContext'
import LazyImage from '../ui/LazyImage'

const CharacterImage = () => {
    
    const { selectedForm } = useCharacterDetail()

    return (
        <LazyImage
            src={selectedForm.image}
            alt={selectedForm.name}
            className={clsx(
                'flex flex-row shrink-0',
                'justify-center items-center',
                'h-[90vh]',
                'hover:scale-105', 
                'ease-in-out transition-all',
                'object-cover',
                'rounded-md',
                'overflow-hidden'
            )}
            imageClassname='p-8 sm:p-0 h-full h-full object-cover rounded-md'
        />
    )
}

export default CharacterImage