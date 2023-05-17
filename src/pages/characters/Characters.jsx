import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import CharacterCard from './CharacterCard'
import { useCharacters } from '../../contexts/CharactersContext'
import { normalizeName } from '../../util/characterUtil'

const Characters = () => {

    const { characters, loading } = useCharacters()

    return (
        <div
            className={clsx(
                'flex flex-wrap',
                'w-full h-full',
                'gap-8',
                'p-4',
                'justify-center items-center'
            )}
        >
            {
                Array.from(characters.values()).map((character) => (
                    <Link
                        key={character._id}
                        to={`/characters/${normalizeName(character.name)}`}
                    >
                        <Fade down>
                            <CharacterCard character={character} />
                        </Fade>
                    </Link>
                ))
            }
        </div>
    )
}

export default Characters