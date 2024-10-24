import heroes from '@images/home/heroes.jpg'
import wakanda from '@images/home/wakanda.webp'
import avengers from '@images/home/avengers.jpg'
import { useLanguage } from '@hooks/useLanguage'
import HeroFade from './HeroFade'
import Section from '@ui/Section'

const HeroHome = () => {

  const { t } = useLanguage('home')

  return (
    
      <div className='text-center py-12 w-full mx-auto items-center space-y-10'>
        <Section name='play'>
          <HeroFade
            right
            src={avengers}
            alt='Avengers'
            title={t('avengers.title')}
            description={t('avengers.description')}
          />
        </Section>
        <Section name='explore'>
          <HeroFade
            left
            src={wakanda}
            alt='Wakanda'
            title={t('worlds.title')}
            description={t('worlds.description')}
          />
        </Section>
        <Section name='create'>
          <HeroFade
            right
            src={heroes}
            alt='Create'
            title={t('create.title')}
            description={t('create.description')}
          />
        </Section>
      </div>
  )
}

export default HeroHome
