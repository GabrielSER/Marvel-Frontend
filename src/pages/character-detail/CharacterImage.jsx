import clsx from "clsx"
import { useCharacterDetail } from "../../contexts/CharacterDetailContext"
import LazyImage from "../ui/LazyImage"

const CharacterImage = () => {
    
    const { selectedForm } = useCharacterDetail()

    return (
        <LazyImage
            src={selectedForm.image}
            alt={selectedForm.name}
            className={clsx(
                'flex flex-row shrink-0',
                'justify-center items-center',
                'w-full md:w-1/3',
                'h-screen',
                'scale-95 hover:scale-100', 
                'object-cover'
            )}
            imageClassname='w-50 h-full object-cover self-center'
        />
    )
}

export default CharacterImage