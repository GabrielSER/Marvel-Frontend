import clsx from 'clsx'

import { useUser } from '@contexts/UserContext'
import { useApplication } from '@contexts/ApplicationContext'
import { useLanguage } from '@hooks/useLanguage'
import useKeyboardShortcut from '@hooks/useKeyboardShortcut'
import UIButton from '@ui/UIButton'
import Tooltip from '@ui/Tooltip'
import LanguageLink from './LanguageLink'
import LoggedUsername from './LoggedUsername'
import UserMenu from './usermenu/UserMenu'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { MdModeEdit, MdEditOff } from 'react-icons/md'

const BarButton = (props) => {
  const { tooltip, shortCut, ...otherProps } = props
  return (
    <Tooltip
      bottom
      content={
        <div className='flex flex-col justify-center text-center text-light gap-1'>
          {tooltip}
          <label className='text-primary'>
            {shortCut}
          </label>
        </div>
      }
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

  useKeyboardShortcut('Control+D', () => {
    setSideDrawer(!sideDrawer)
  }, [sideDrawer, setSideDrawer])

  return (
    <BarButton
      tooltip={t(sideDrawer ? 'statebar.drawer-close' : 'statebar.drawer-open')}
      shortCut='Ctrl+D'
      onClick={() => setSideDrawer(!sideDrawer)}
    >
      <GiHamburgerMenu />
    </BarButton>
  )
}

const SmartSearchButton = () => {

  const { t } = useLanguage('main')

  useKeyboardShortcut('Shift+Shift', () => {
    console.log('Smart search')
  }, [])

  return (
    <BarButton
      tooltip={t('statebar.smart-search')}
      shortCut='Shift+Shift'
    >
      <FaSearch />
    </BarButton>
  )
}

const EditModeButton = () => {

  const { isAdmin } = useUser()
  const { t } = useLanguage('main')

  const {
    editMode,
    setEditMode,
  } = useApplication()

  useKeyboardShortcut('Control+E', () => {
    if (isAdmin) {
      setEditMode(!editMode)
    }
  }, [isAdmin, editMode, setEditMode])

  return (
    <BarButton
      tooltip={t(editMode ? 'statebar.turn-edit-off' : 'statebar.turn-edit-on')}
      shortCut='Ctrl+E'
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
