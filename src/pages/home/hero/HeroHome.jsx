import heroes from '@images/home/heroes.jpg'
import wakanda from '@images/home/wakanda.webp'
import avengers from '@images/home/avengers.jpg'
import { useLanguage } from '@hooks/useLanguage'
import HeroFade from './HeroFade'

const HeroHome = () => {

  const { t } = useLanguage('home')

  return (
    <div className='text-center py-12 md:py-16 w-full'>
      <div className='w-full mx-auto items-center space-y-10'>
        <HeroFade
          right
          src={avengers}
          alt='Avengers'
          title={t('avengers.title')}
          description={t('avengers.description')}
        />
        <HeroFade
          left
          src={wakanda}
          alt='Wakanda'
          title={t('worlds.title')}
          description={t('worlds.description')}
        />
        <HeroFade
          right
          src={heroes}
          alt='Create'
          title={t('create.title')}
          description={t('create.description')}
        />
      </div>
    </div>
  )
}

export default HeroHome
