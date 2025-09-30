import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Fade } from 'react-reveal'
import { useCharacters } from '@contexts/CharactersContext'
import { useUserCharacters } from '../../contexts/UserCharactersContext'
//import { useLanguage } from '@hooks/useLanguage'
import { normalizeString } from '@util/stringUtil'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import PrimaryInput from '@ui/PrimaryInput'
import CharacterCard from './CharacterCard'

const Characters = () => {
  const nav = useNavigate()
  const { characters } = useCharacters()
  const { create } = useUserCharacters()

  const [searchInput, setSearchInput] = useState()
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [showDevelopmentStatus, setShowDevelopmentStatus] = useState(false)
  const [startingId, setStartingId] = useState(null) // button loading state per card

  const scrollToTop = () => {
    window.scrollTo({ top: 400, behavior: 'smooth' })
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
  }, [searchInput, characters])

  const startNewCharacter = async (character) => {
    try {
      // prefer defaultForm; fall back to first form if present
      const formId = character.defaultForm || (character.forms && character.forms[0])
      if (!formId) return

      setStartingId(character._id)
      const sheet = await create({ characterId: character._id, formId })
      // go to the new personal sheet
      nav(`/my-characters/${sheet._id}`)
    } finally {
      setStartingId(null)
    }
  }

  return (
    <div>

      <div className='flex w-full bg-dark text-primary border-t border-light-2 shadow-xl rounded-bl-lg rounded-br-lg p-4'>
        <div className='flex grow relative items-center'>
          <FaSearch className='absolute ml-3' />
          <PrimaryInput
            className='w-full md:w-72 pl-8'
            placeholder='Search character...'
            state={searchInput}
            onChange={(change) => setSearchInput(change.value)}
          />
        </div>
        <div className='flex grow relative items-center justify-end gap-2'>
          <input
            type="checkbox"
            id="showStatus"
            checked={showDevelopmentStatus}
            onChange={(e) => setShowDevelopmentStatus(e.target.checked)}
            className="accent-green-500 w-4 h-4"
          />
          <label htmlFor="showStatus" className="select-none">
            Show Development Status
          </label>
        </div>
      </div>

      <div className='flex w-full justify-center p-4'>
        <ComicTitlePanel>
          <h1 className='text-5xl font-semibold text-center p-4 z-50'>HEROES</h1>
        </ComicTitlePanel>
      </div>

      <div className='flex flex-wrap w-full gap-8 p-4 justify-center items-center'>
        {filteredCharacters
          .filter((character) => character.types.includes('hero'))
          .sort((a, b) => a.order - b.order)
          .map((character) => {
            const hasForm = Boolean(character.defaultForm || (character.forms && character.forms[0]))
            const isStarting = startingId === character._id

            return (
              <div key={character._id} className='flex flex-col items-center'>
                <Link
                  onClick={scrollToTop}
                  to={`/characters/${normalizeString(character.name)}`}
                  className='block'
                >
                  <Fade down>
                    <CharacterCard character={character} showStatus={showDevelopmentStatus} />
                  </Fade>
                </Link>

                {/* Action bar under the card */}
                <div className='mt-2 w-full flex justify-center'>
                  <button
                    disabled={!hasForm || isStarting}
                    onClick={() => startNewCharacter(character)}
                    className={`px-3 py-2 rounded-md text-sm font-semibold border
                      ${hasForm ? 'bg-primary text-dark hover:brightness-110' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}
                    `}
                    title={hasForm ? 'Create a personal sheet from this character' : 'This character has no form configured'}
                  >
                    {isStarting ? 'Starting…' : 'Start New Character'}
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Characters
