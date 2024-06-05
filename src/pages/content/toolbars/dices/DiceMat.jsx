import clsx from 'clsx'
import { useDices } from '../../../../contexts/DicesContext'
import { cloneElement } from 'react'

const DiceMat = () => {
  const { rolls } = useDices()

  return (
    <div className={clsx('flex flex-wrap', 'justify-center', 'pt-2 gap-2')}>
      {rolls.map((roll, index) => cloneElement(roll, { key: index }))}
    </div>
  )
}

export default DiceMat
