import clsx from 'clsx'
import { useToolbar } from '../../../../contexts/ToolbarContext'
import { FaToolbox } from 'react-icons/fa'
import Tooltip from '../../../ui/Tooltip'

const ToolbarToogle = () => {
  const { visible, toggleVisible } = useToolbar()

  return (
    <Tooltip
      top
      right
      content={visible ? 'Hide toolbar' : 'Show toolbar'}
    >
      <button
        className={clsx(
          'flex justify-center items-center',
          'w-8 h-8 m-2',
          'ui-box',
          'rounded-full',
          'text-light',
          'pointer-events-auto'
        )}
        onClick={toggleVisible}
      >
        <FaToolbox />
        {visible}
      </button>
    </Tooltip>
  )
}

export default ToolbarToogle
