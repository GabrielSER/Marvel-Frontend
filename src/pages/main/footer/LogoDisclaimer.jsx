import clsx from 'clsx'
import MarvelLogo from '@ui/MarvelLogo'

const LogoDisclaimer = () => (
  <div
    className={clsx(
      'flex flex-col',
      'gap-2',
      'w-full sm:w-2/3',
      'justify-center items-center',
      'w-full',
      'text-center'
    )}
  >
    <a
      className='hover:scale-105 hover:opacity-80'
      href='https://www.marvel.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <MarvelLogo className='h-32' />
    </a>
    <p className='text-xs'>
      Disclaimer: This is a fan project. All logos, characters, artwork,
      stories, information, names, and other elements associated with Marvel
      Entertainment, LLC, its subsidiaries and affiliates are the sole and
      exclusive property of the aforementioned companies.
    </p>
  </div>
)

export default LogoDisclaimer
