import clsx from 'clsx'
import LanguageLink from './LanguageLink'
import UserLogo from './UserLogo'
import Banner from '../Banner'
import { useUser } from '../../../contexts/UserContext'

const StateBar = () => {
  const { user } = useUser()

  return (
    <div>
      <div
        className={clsx(
          'flex shrink-0',
          'justify-end items-center',
          'space-x-2',
          'p-2',
          'bg-dark',
          'shadow-lg',
          'font-condensed'
        )}
      >
        <LanguageLink
          label='EN'
          active={true}
        />
        <LanguageLink label='ES' />
        {user && (
          <label className='text-light font-bold'>{user.username}</label>
        )}
        <UserLogo />
      </div>
      <Banner />
    </div>
  )
}

export default StateBar
