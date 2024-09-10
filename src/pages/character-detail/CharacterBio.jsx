import { useCharacter } from '../../contexts/CharacterContext'
import ComicPanel from '../ui/ComicPanel'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const CharacterBio = () => {
  const { character } = useCharacter()

  return (
    <ComicPanel className='flex relative overflow-hidden bg-opacity-75'>
      <div className='flex flex-col  w-full h-full p-5 sm:p-10 bg-comic-primary-light'>
        <div className='flex flex-row w-auto'>
          <ComicTitlePanel>
            <h1 className='text-2xl font-bold'>Bio:</h1>
          </ComicTitlePanel>
        </div>
        <span className='sm:self-start'>{character.description}</span>
      </div>
    </ComicPanel>
  )
}

export default CharacterBio
