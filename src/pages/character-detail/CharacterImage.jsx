import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useCharacterDetail } from '@contexts/CharacterDetailContext'
import { useApplication } from '@contexts/ApplicationContext'
import LazyImage2 from '@ui/LazyImage2'
import StatLogo from '@ui/StatLogo'
import Tooltip from '@ui/Tooltip'
import EditButton from '@ui/edit/EditButton'
import TextEdit from '@ui/edit/TextEdit'
import Bulletproof from '@assets/icons/bulletproof.png'
import Flight from '@assets/icons/flight.png'

const StatComponent = ({ children }) => {
  return (
    <div className='absolute z-over-page top-0 left-0 p-4 text-white'>
      {children}
    </div>
  )
}

const StatComponent2 = ({ children }) => {
  return (
    <div className='absolute z-over-page top-0 right-0 p-4 text-white'>
      {children}
    </div>
  )
}

const imagePlaceholder = (
  <div
    className='flex flex-col pt-24 lg:pt-52'
    role='status'
  >
    <svg
      aria-hidden='true'
      className='w-32 lg:w-40 h-32 lg:h-40 text-gray-400 animate-spin dark:text-gray-600 fill-red-600'
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
    <span className='sr-only'>Loading...</span>
  </div>
)

const CharacterImage = () => {
  const { selectedForm } = useCharacterDetail()
  const [isLoaded, setIsLoaded] = useState(false)

  const { setLoading } = useApplication()
  const bulletproofStat = selectedForm.stats.find(
    (stat) => stat.uniqueName === 'bulletproof'
  )

  const flightSkill = selectedForm.specialSkills.find(
    (specialSkill) => specialSkill.uniqueName === 'flight'
  )


  useEffect(() => {
    setIsLoaded(false) // Reset the loading state on form change
  }, [selectedForm])

  return (
    <div
      className={clsx(
        'relative',
        'hover:scale-105',
        'ease-in-out transition-all'
      )}
    >
      {bulletproofStat && isLoaded && (
        <StatComponent>
          <Tooltip
            bottom
            content='Bulletproof'
          >
            <StatLogo
              image={Bulletproof}
              text={bulletproofStat.value}
            />
          </Tooltip>
        </StatComponent>
      )}

      {flightSkill.value != 0 && isLoaded && (
        <StatComponent2>
          <Tooltip
            bottom
            content='Flight'
          >
            <StatLogo
              image={Flight}
              text={flightSkill.value}
            />
          </Tooltip>
        </StatComponent2>
      )}



      <LazyImage2 // Using LazyImage2 component
        key={selectedForm.image}
        src={selectedForm.image}
        alt={selectedForm.name}
        className={clsx(
          'flex flex-row shrink-0',
          'justify-center items-center',
          'object-cover',
          'rounded-md',
          'overflow-hidden'
        )}
        imageClassname={clsx(
          'p-0 w-auto xs:w-80 lg:w-auto h-[80vh] lg:h-[90vh] object-cover rounded-md',
          { 'flip-in': isLoaded }
        )}
        placeholder={imagePlaceholder}
        onLoad={() => {
          setLoading(false)
          setIsLoaded(true)
        }}
      />
      <EditButton
        absolute
        className='text-white top-2 right-2'
        title={`Edit image URL:`}
        initialValue={selectedForm.image}
        bodyComponent={TextEdit}
        summitFunction={() => { }}
      />
    </div>
  )
}

export default CharacterImage
