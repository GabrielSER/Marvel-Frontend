import { useState } from 'react'
import clsx from 'clsx'
import { useForm } from '@contexts/FormContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'

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

const CharacterWeapons = () => {
  const { form } = useForm()
  const { weapons = [] } = form

  const [toggledIndexes, setToggledIndexes] = useState({})

  const handleToggle = (index) => {
    setToggledIndexes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  if (weapons.length === 0) return null

  return (
    <div className="flex flex-col max-w-full p-10">
      <div className="flex flex-row max-w-full">
        <ComicTitlePanel>Basic Equipment:</ComicTitlePanel>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 py-4">
        {weapons.map((weapon, index) => {
          const upperWeapon = weapon.toUpperCase()
          const isToggled = toggledIndexes[index]
          const imagePath = isToggled
            ? weaponDescriptions[upperWeapon]
            : weaponLogos[upperWeapon]

          return (
            <div
              key={index}
              className="flex flex-col items-center max-w-full"
            >
              <button
                onClick={() => handleToggle(index)}
                title={weapon}
                className="focus:outline-none"
              >
                {imagePath ? (
                  <img
                    src={imagePath}
                    alt={weapon}
                    className={clsx(
                      'object-contain transition-transform duration-200',
                      isToggled ? 'max-w-full h-auto' : 'w-16 h-16 hover:scale-110'
                    )}
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-300 text-center flex items-center justify-center text-xs rounded">
                    Image<br />Not<br />Found
                  </div>
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CharacterWeapons
