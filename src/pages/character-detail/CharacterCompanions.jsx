import { useState } from 'react'
import clsx from 'clsx'
import { useForm } from '@contexts/FormContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'

// Load logos (.png or .PNG)
const contextLogos = require.context(
  '../../assets/images/companions/icon',
  false,
  /\.(png|PNG)$/
)

// Load description images (.png or .PNG)
const contextDescriptions = require.context(
  '../../assets/images/companions',
  false,
  /\.(png|PNG)$/
)

// Normalize and store in maps
const companionLogos = {}
const companionDescriptions = {}

contextLogos.keys().forEach((key) => {
  const name = key.replace('./', '').replace(/\.[^/.]+$/, '').toUpperCase()
  companionLogos[name] = contextLogos(key)
})

contextDescriptions.keys().forEach((key) => {
  const name = key.replace('./', '').replace(/\.[^/.]+$/, '').toUpperCase()
  companionDescriptions[name] = contextDescriptions(key)
})

const CharacterCompanions = () => {
  const { form } = useForm()
  const { companions = [] } = form

  const [toggledIndexes, setToggledIndexes] = useState({})

  const handleToggle = (index) => {
    setToggledIndexes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  if (companions.length === 0) return null

  return (
    <div className="flex flex-col max-w-full p-10">
      <div className="flex flex-row max-w-full">
        <ComicTitlePanel>Companions:</ComicTitlePanel>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 py-4">
        {companions.map((companion, index) => {
          const upperKey = companion.toUpperCase().replace(/\s+/g, '')
          const isToggled = toggledIndexes[index]
          const imagePath = isToggled
            ? companionDescriptions[upperKey]
            : companionLogos[upperKey]

          return (
            <div
              key={index}
              className="flex flex-col items-center max-w-full"
            >
              <button
                onClick={() => handleToggle(index)}
                title={companion}
                className="focus:outline-none"
              >
                {!isToggled && (
                  <div className="flex flex-row max-w-full py-4">
                    <ComicTitlePanel className='bg-comic-secondary'>
                      {`${companion}:`}
                    </ComicTitlePanel>
                  </div>
                )}

                {imagePath ? (
                  <img
                    src={imagePath}
                    alt={companion}
                    className={clsx(
                      'object-contain transition-transform duration-200',
                      isToggled ? 'max-w-full h-auto' : 'w-40 h-auto hover:scale-110'
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

export default CharacterCompanions
