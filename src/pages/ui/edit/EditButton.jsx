import clsx from 'clsx'
import { MdModeEdit } from 'react-icons/md'
import { useApplication } from '@contexts/ApplicationContext'
import EditModal from './EditModal'
import { useMemo } from 'react'

const AbsoluteWrapper = (props) => {
    const { absoluteClassName, ...otherProps } = props
    return (
        <div
            className={clsx(
                'absolute flex',
                'inset-0 w-full h-full'
            )}
        >
            <div
                className={clsx(
                    'relative flex grow',
                    'border border-dashed border-transparent',
                    'hover:border-dark hover:rounded-md',
                    absoluteClassName
                )}
                {...otherProps}
            />
        </div>
    )
}

const Button = (props) => {

    const { setModalComponent } = useApplication()
    const { className, absolute, ...otherProps } = props

    return (
        <button
            className={clsx(
                'flex',
                absolute && 'absolute',
                (absolute && !className) && 'top-2 right-2',
                'items-center justify-center',
                'w-6 h-6 p-1',
                'rounded-full',
                'bg-shadow',
                'hover:scale-105',
                'font-condensed uppercase',
                className
            )}
            onClick={() => setModalComponent(() => <EditModal {...otherProps} />)}
        >
            <MdModeEdit />
        </button>
    )
}

const EditButton = (props) => {

    const {
        className,
        absolute,
        absoluteClassName,
        ...otherProps
    } = props

    const { editMode } = useApplication()

    if (!editMode) return null

    const button = useMemo(() =>
        <Button
            absolute={absolute}
            className={className}
            {...otherProps}
        />, [absolute, className, otherProps])

    return (
        <>
            {absolute &&
                <AbsoluteWrapper absoluteClassName={absoluteClassName}>
                    {button}
                </AbsoluteWrapper>
            }
            {!absolute && button}
        </>
    )
}

export default EditButton