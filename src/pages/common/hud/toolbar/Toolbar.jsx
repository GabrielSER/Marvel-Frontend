import clsx from 'clsx'
import Content from '../../../ui/Content'
import { useToolbar } from '../../../../contexts/ToolbarContext'
import ToolbarWindow from './ToolbarWindow'

const Toolbar = () => {
  const { visible, toolbars, currentToolbar, currentToolbarData } = useToolbar()

  if (!visible || Object.values(toolbars).length === 0) return null

  return (
    <div
      className={clsx(
        'flex flex-col',
        'justify-center',
        'w-full',
        currentToolbarData?.maximized ? 'h-full' : 'h-max',
        'pointer-events-auto',
        currentToolbar && 'backdrop-blur-sm'
      )}
    >
      <ToolbarWindow />
      <div
        className={clsx(
          'flex flex-shrink-0',
          'justify-center gap-3',
          'w-min h-16',
          'm-2 p-2',
          'bg-dark',
          'border border-light-2',
          'rounded-md',
          'overflow-x-auto overflow-y-hidden',
          'hide-scroll'
        )}
      >
        {Object.values(toolbars).map((toolbar, index) => (
          <Content
            key={index}
            id={toolbar.toolbar.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Toolbar
