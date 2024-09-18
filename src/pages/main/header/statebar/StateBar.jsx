import clsx from 'clsx'

import { useUser } from '@contexts/UserContext'
import { useApplication } from '@contexts/ApplicationContext'
import { useLanguage } from '@hooks/useLanguage'
import UIButton from '@ui/UIButton'
import Tooltip from '@ui/Tooltip'
import LanguageLink from './LanguageLink'
import LoggedUsername from './LoggedUsername'
import UserMenu from './usermenu/UserMenu'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { MdModeEdit, MdEditOff } from 'react-icons/md'

const BarButton = (props) => {
  const { tooltip, ...otherProps } = props
  return (
    <Tooltip
      bottom
      content={tooltip}
    >
      <UIButton className='p-2' {...otherProps} />
    </Tooltip>
  )
}

const SideBarButton = () => {

  const { t } = useLanguage('main')

  const {
    sideDrawer,
    setSideDrawer
  } = useApplication()

  return (
    <BarButton
      tooltip={t(sideDrawer ? 'statebar.drawer-close' : 'statebar.drawer-open')}
      onClick={() => setSideDrawer(!sideDrawer)}
    >
      <GiHamburgerMenu />
    </BarButton>
  )
}

const SmartSearchButton = () => {

  const { t } = useLanguage('main')

  return (
    <BarButton
      tooltip={t('statebar.smart-search')}
    >
      <FaSearch />
    </BarButton>
  )
}

const EditModeButton = () => {

  const { t } = useLanguage('main')

  const {
    editMode,
    setEditMode,
  } = useApplication()

  return (
    <BarButton
      tooltip={t(editMode ? 'statebar.turn-edit-off' : 'statebar.turn-edit-on')}
      onClick={() => setEditMode(!editMode)}
    >
      {editMode ? <MdEditOff /> : <MdModeEdit />}
    </BarButton>
  )
}

const LanguageButton = (props) => {

  const { locale } = props

  const { t } = useLanguage('main')

  return (
    <Tooltip
      bottom
      content={t(`statebar.lang-${locale}`)}
    >
      <LanguageLink language={locale} />
    </Tooltip>
  )
}

const StateBar = () => {

  const { isAdmin } = useUser()

  return (
    <div
      className={clsx(
        'fixed flex shrink-0',
        'w-full',
        'items-center',
        'space-x-2',
        'p-2',
        'z-header',
        'text-light',
        'bg-dark',
        'border-b border-b-light-2',
        'shadow-lg',
        'font-condensed'
      )}
    >
      <span className='flex w-full pl-2 space-x-1'>
        <SideBarButton />
        <SmartSearchButton />
      </span>
      {
        isAdmin &&
        <EditModeButton />
      }
      <LanguageButton locale='en' />
      <LanguageButton locale='es' />
      <LoggedUsername />
      <UserMenu />
    </div>
  )
}

export default StateBar
