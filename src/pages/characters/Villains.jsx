import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import { useCharacters } from '@contexts/CharactersContext'
//import { useLanguage } from '@hooks/useLanguage'
import { normalizeString } from '@util/stringUtil'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import PrimaryInput from '@ui/PrimaryInput'
import CharacterCard from './CharacterCard'

const Villains = () => {
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
            VILLAINS
          </h1>
        </ComicTitlePanel>
      </div>
      <div
        className={clsx(
          'flex flex-wrap',
          'w-full',
          'gap-8',
          'p-4',
          'justify-center items-center'
        )}
      >
        {filteredCharacters
          .filter((character) => character.types.includes("villain")) // Filtra solo los que tienen "Hero"
          .sort((a, b) => a.order - b.order) // Ordena por el campo order
          .map((character) => (
            <Link
              onClick={scrollToTop}
              key={character._id}
              to={`/characters/${normalizeString(character.name)}`}
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

export default Villains
