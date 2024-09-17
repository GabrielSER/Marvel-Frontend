import clsx from 'clsx'
import LanguageLink from './LanguageLink'
import LoggedUsername from './LoggedUsername'
import UserMenu from './usermenu/UserMenu'

const StateBar = () => {

  return (
    <div
      className={clsx(
        'fixed flex shrink-0',
        'w-full',
        'justify-end items-center',
        'space-x-2',
        'p-2',
        'z-header',
        'bg-dark',
        'border-b border-b-light-2',
        'shadow-lg',
        'font-condensed'
      )}
    >
      <LanguageLink language='en' />
      <LanguageLink language='es' />
      <LoggedUsername />
      <UserMenu />
    </div>
  )
}

export default StateBar
