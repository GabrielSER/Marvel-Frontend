import { useCharacter } from '../../contexts/CharacterContext'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const CharacterName = () => {

    const { character } = useCharacter()

    return (
        <div className='flex gap-4 items-center'>
            <ComicTitlePanel>
                Real Name:
            </ComicTitlePanel>
            {character.alterego}
        </div>
    )
}

export default CharacterName