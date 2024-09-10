import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import CharacterCard from './CharacterCard'
import { useCharacters } from '../../contexts/CharactersContext'
import { normalizeName } from '../../util/characterUtil'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import PrimaryInput from '../ui/PrimaryInput'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

const Characters = () => {
  const { characters } = useCharacters()
  const [searchInput, setSearchInput] = useState()
  const [filteredCharacters, setFilteredCharacters] = useState([])

  const scrollToTop = () => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const charactersArray = Array.from(characters.values())

    if (!searchInput) {
      setFilteredCharacters(charactersArray)
      return
    }
    const lowerInput = searchInput.toLowerCase()
    const filtered = charactersArray.filter((character) => {
      return (
        character.name.toLowerCase().includes(lowerInput) ||
        character.alterego.toLowerCase().includes(lowerInput)
      )
    })
    setFilteredCharacters(filtered)
  }, [searchInput, characters, setFilteredCharacters])

  return (
    <div>
      <div
        className={clsx(
          'flex',
          'w-full',
          'bg-dark',
          'font-condensed',
          'text-primary',
          'border-t border-t-light-2',
          'shadow-xl',
          'rounded-bl-lg',
          'rounded-br-lg',
          'p-4'
        )}
      >
        <div className='flex grow relative items-center'>
          <FaSearch className='absolute ml-3' />
          <PrimaryInput
            className='w-full md:w-72 pl-8'
            placeholder='Search character...'
            state={searchInput}
            onChange={(change) => setSearchInput(change.value)}
          />
        </div>
      </div>
      <div className='flex w-full justify-center p-4 '>
        <ComicTitlePanel>
          <h1 className='text-5xl font-semibold text-center p-4 z-50'>
            HEROES
          </h1>
        </ComicTitlePanel>
      </div>
      <div
        className={clsx(
          'flex flex-wrap',
          'w-full h-full',
          'gap-8',
          'p-4',
          'justify-center items-center',
          'z-40'
        )}
      >
        {filteredCharacters.map((character) => (
          <Link
            onClick={scrollToTop}
            key={character._id}
            to={`/characters/${normalizeName(character.name)}`}
          >
            <Fade down>
              <CharacterCard character={character} />
            </Fade>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Characters
