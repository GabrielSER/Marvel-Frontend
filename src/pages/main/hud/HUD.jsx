import clsx from 'clsx'
import Toolbar from './toolbar/Toolbar'
import ToolbarToogle from './toolbar/ToolbarToggle'

const HUD = () => {
  return (
    <div
      className={clsx(
        'z-hud',
        'fixed inset-0',
        'w-full',
        'h-screen',
        'overflow-x-hidden overflow-y-hidden',
        'pointer-events-none'
      )}
    >
      <div
        className={clsx(
          'relative',
          'flex flex-col',
          'justify-end',
          'w-full h-full',
          'overflow-x-hidden overflow-y-hidden',
          'pointer-events-none'
        )}
      >
        <ToolbarToogle />
        <Toolbar />
      </div>
    </div>
  )
}

export default HUD
