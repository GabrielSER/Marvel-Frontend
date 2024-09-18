import clsx from 'clsx'
import { useLanguage } from '@hooks/useLanguage'
import MarvelLogo from '@ui/MarvelLogo'

const Banner = () => {
  const { t } = useLanguage('main')
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-center items-center',
        'p-2 pt-16',
        'space-y-2',
        'text-2xl',
        'text-white',
        'font-bold font-condensed'
      )}
    >
      <h1 className='hover:text-red-700'>
        {t('banner.all-new')}
      </h1>
      <MarvelLogo className='h-[150px]' />
      <h1>{t('banner.roleplaying-game')}</h1>
    </div>
  )
}

export default Banner
