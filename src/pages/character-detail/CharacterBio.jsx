import clsx from 'clsx'
import { useCharacter } from '../../contexts/CharacterContext'
import LazyImage from '../ui/LazyImage'
import ComicPanel from '../ui/ComicPanel'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const CharacterBio = () => {

    const { character } = useCharacter()

    return (
        <ComicPanel color='#bfbfbf'>
            <div className='flex flex-col p-5 sm:p-10'>

                <div className='flex flex-row w-auto'>
                    <ComicTitlePanel>
                        <h1 className='text-2xl font-bold'>
                            Bio:
                        </h1>
                    </ComicTitlePanel>

                </div>
                <span className='sm:self-start'>
                    {character.description}
                </span>

            </div>
        </ComicPanel>
    )
}

export default CharacterBio