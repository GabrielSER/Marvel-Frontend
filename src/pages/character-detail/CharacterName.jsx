import { useCharacterDetail } from '@contexts/CharacterDetailContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import EditButton from '@ui/edit/EditButton'
import TextEdit from '@ui/edit/TextEdit'

const CharacterName = () => {

  const { character, update } = useCharacterDetail()

  return (
    <div className='flex gap-4 items-center w-full'>
      <ComicTitlePanel>Real Name:</ComicTitlePanel>
      {character.alterego}
      <EditButton
        title='Edit character alterego'
        name='alterego'
        state={character}
        bodyComponent={TextEdit}
        summitFunction={update}
      />
    </div>
  )
}

export default CharacterName
