import { useCharacterDetail } from '@contexts/CharacterDetailContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import ComicPanel from '@ui/ComicPanel'
import EditButton from '@ui/edit/EditButton'
import TextEdit from '@ui/edit/TextEdit'

const ObjectBio = () => {

  const { character, update } = useCharacterDetail()

  return (
    <ComicPanel className='flex relative flex-col w-full h-auto overflow-hidden bg-opacity-75 bg-comic-primary-light p-5 sm:p-10'>
      <ComicTitlePanel>
        <h1 className='text-2xl font-bold'>Description:</h1>
      </ComicTitlePanel>
      <span className='sm:self-start'>
        {character.description}
      </span>
      <EditButton
        absolute
        absoluteClassName='m-10'
        title='Edit character bio'
        name='description'
        state={character}
        bodyComponent={TextEdit}
        summitFunction={update}
      />
    </ComicPanel>
  )
}

export default ObjectBio
