import clsx from 'clsx'
import NavigationContainer from './NavigationContainer'
import NavigationLink from './NavigationLink'
import Banner from '../Banner'

import { useLanguage } from '@hooks/useLanguage'

const Navbar = () => {

  const { t } = useLanguage('main')

  return (
    <div
      className={clsx(
        'flex flex-col pt-16',
        'w-full',
        'snap-start',
        'bg-dark',
        'shadow-lg',
        'z-over-page'
      )}
    >
      <Banner />
      <NavigationContainer>
        <NavigationLink
          text={t('nav.home')}
          to='/'
        />
        <NavigationLink
          text={t('nav.characters')}
          to='/characters'
        />
        <NavigationLink
          text={t('nav.universe')}
          to='/places'
        />
        <NavigationLink
          text={t('nav.objects')}
          to='/objects'
        />
        <NavigationLink
          text={t('nav.rules')}
          to='/rules'
        />
        <NavigationLink
          text={t('nav.guide')}
          to='/player'
        />
        <NavigationLink
          text={t('nav.combat')}
          to='/combat'
        />
        <NavigationLink
          text={t('nav.roleplaying')}
          to='/roleplaying'
        />
      </NavigationContainer>
    </div>
  )
}

export default Navbar
