import CharacterCard from '../objects/ObjectCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import clsx from 'clsx'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import { useCharacters } from '@contexts/CharactersContext'
import { normalizeString } from '@util/stringUtil'
import { useForm } from '@contexts/FormContext'

// Load logos (.png or .PNG)
const contextLogos = require.context(
  '../../assets/images/combat/logos',
  false,
  /\.(png|PNG)$/
)

// Load description images (.png or .PNG)
const contextDescriptions = require.context(
  '../../assets/images/combat',
  false,
  /\.(png|PNG)$/
)

const scrollToTop = () => {
  window.scrollTo({
    top: 400,
    behavior: 'smooth'
  })
}

// Normalize and store in maps
const weaponLogos = {}
const weaponDescriptions = {}

contextLogos.keys().forEach((key) => {
  const name = key.replace('./', '').replace(/\.[^/.]+$/, '').toUpperCase()
  weaponLogos[name] = contextLogos(key)
})

contextDescriptions.keys().forEach((key) => {
  const name = key.replace('./', '').replace(/\.[^/.]+$/, '').toUpperCase()
  weaponDescriptions[name] = contextDescriptions(key)
})



const CharacterObjects = () => {
  const { characters } = useCharacters()
  const [searchInput] = useState()
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const { form } = useForm()
  const { objects = [] } = form
  const { weapons = [] } = form

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

  if (objects.length === 0) return null

  return (
    <div className="flex flex-col max-w-full p-10">
      {weapons.length == 0 && (<div className="flex flex-row max-w-full">
        <ComicTitlePanel>Basic Equipment:</ComicTitlePanel>
      </div>)}
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
          .filter((character) => character._id.includes(objects[0])) // Filtra solo los que tienen "Hero"
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

export default CharacterObjects
