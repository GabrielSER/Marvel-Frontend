import clsx from 'clsx'
import { useToolbar } from '../../../../contexts/ToolbarContext'
import {
  FaWindowMinimize,
  FaWindowMaximize,
  FaWindowClose
} from 'react-icons/fa'

const ViewButton = (props) => {
  const { children, disabled, action } = props

  return (
    <button
      disabled={disabled}
      className={clsx(
        'flex',
        'text-light',
        'enabled:hover:text-white',
        'enabled:hover:scale-105',
        'disabled:text-light/50'
      )}
      onClick={action}
    >
      {children}
    </button>
  )
}

const WindowView = () => {
  const { currentToolbar, minimize, close, maximize, maximized } = useToolbar()

  const { longName } = currentToolbar

  return (
    <div
      className={clsx(
        'flex justify-end',
        'gap-2',
        'h-6 p-0.5 mx-1',
        'border-b border-light-2'
      )}
    >
      {longName && (
        <span className='w-full font-condensed uppercase'>{longName}</span>
      )}
      <ViewButton action={minimize}>
        <FaWindowMinimize />
      </ViewButton>
      <ViewButton
        disabled={maximized}
        action={maximize}
      >
        <FaWindowMaximize />
      </ViewButton>
      <ViewButton action={close}>
        <FaWindowClose />
      </ViewButton>
    </div>
  )
}

const ToolbarWindow = () => {
  const { currentToolbarData } = useToolbar()

  if (!currentToolbarData) return null

  const { toolbarComponent, maximized } = currentToolbarData

  if (!toolbarComponent) return null

  return (
    <div
      className={clsx(
        'flex flex-col',
        maximized ? 'h-full' : 'h-max',
        'mx-2',
        'dark-box',
        'pointer-events-auto',
        'overflow-x-hidden overflow-y-hidden',
        'text-light'
      )}
    >
      <WindowView />
      <div className={clsx('p-2', 'overflow-x-hidden overflow-y-auto')}>
        {toolbarComponent}
      </div>
    </div>
  )
}

export default ToolbarWindow
