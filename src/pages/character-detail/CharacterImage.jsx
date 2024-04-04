import clsx from 'clsx'
import { useCharacterDetail } from '../../contexts/CharacterDetailContext'
import LazyImage from '../ui/LazyImage'
import Bulletproof from '../../assets/icons/bulletproof.png'
import StatLogo from '../ui/StatLogo'
import Tooltip from '../ui/Tooltip'

const StatComponent = (props) => {
  const { children } = props
  return (
    <div className='absolute top-0 left-0 p-4 text-white'>
      {children}
    </div>
  )
}

const CharacterImage = () => {

  const { selectedForm } = useCharacterDetail()

  const bulletproofStat = selectedForm.stats.find(
    stat => stat.uniqueName === 'bulletproof'
  )

  return (
    <div
      className={clsx(
        'relative',
        'hover:scale-105',
        'ease-in-out transition-all'
      )}
    >
      {
        bulletproofStat &&
        <StatComponent >
          <Tooltip bottom content='Bulletproof'>
            <StatLogo
              image={Bulletproof}
              text={bulletproofStat.value}
            />
          </Tooltip>
        </StatComponent>
      }
      <LazyImage
        src={selectedForm.image}
        alt={selectedForm.name}
        className={clsx(
          'flex flex-row shrink-0',
          'justify-center items-center',
          'h-[90vh]',
          'object-cover',
          'rounded-md',
          'overflow-hidden'
        )}
        imageClassname='sm:p-0 h-full h-full object-cover rounded-md'
      />
    </div>
  )
}

export default CharacterImage;
