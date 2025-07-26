import { useState } from 'react'
import clsx from 'clsx'
import { useForm } from '@contexts/FormContext'
import ComicTitlePanel from '@ui/ComicTitlePanel'
import '../../styles/CardFlip.css'

// Load images
const contextLogos = require.context(
  '../../assets/images/companions/icon',
  false,
  /\.(png|PNG)$/
)
const contextDescriptions = require.context(
  '../../assets/images/companions',
  false,
  /\.(png|PNG)$/
)

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
    <div className="flex flex-col max-w-full p-20">
      <div className="flex flex-row max-w-full">
        <ComicTitlePanel>Companions:</ComicTitlePanel>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-24 py-4">
        {companions.map((companion, index) => {
          const key = companion.toUpperCase().replace(/\s+/g, '')
          const isFlipped = toggledIndexes[index]
          const icon = companionLogos[key]
          const description = companionDescriptions[key]

          return (
            <div
              key={index}
              className={clsx('card', isFlipped && 'flipped')}
              onClick={() => handleToggle(index)}
              title={companion}
            >
              <div className={clsx('card-inner', isFlipped && 'flipped')}>
                <div className="card-front">
                  {icon ? (
                    <img
                      src={icon}
                      alt={companion}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-center text-xs">Icon Not Found</div>
                  )}
                </div>

                <div className="card-back">
                  {description ? (
                    <img
                      src={description}
                      alt={`${companion} Description`}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-center text-xs text-white">Description Not Found</div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CharacterCompanions
