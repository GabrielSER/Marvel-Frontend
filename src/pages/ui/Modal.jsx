import clsx from 'clsx'
import { useCallback, useEffect } from 'react'
import FocusLock from 'react-focus-lock'
import { useApplication } from '@contexts/ApplicationContext'
import useKeyboardShortcut from '@hooks/useKeyboardShortcut'
import UIButton from './UIButton'
import { FaWindowClose } from 'react-icons/fa'

const Modal = (props) => {

    const { setModalComponent } = useApplication()

    const {
        title,
        body = props.children,
        summitText,
        closeText,
        summitFunction
    } = props

    // Hide scroll while open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = ''
    }, [])

    const close = useCallback(() => {
        setModalComponent(undefined)
    }, [setModalComponent])

    const summit = useCallback(async () => {
        await summitFunction?.()
        close()
    }, [close, summitFunction])

    useKeyboardShortcut('Escape', () => {
        close()
    }, [close])

    return (
        <div
            className={clsx(
                'absolute flex',
                'justify-center items-center',
                'p-2',
                'w-full h-full',
                'bg-shadow',
                'backdrop-blur-lg',
                'pointer-events-auto'
            )}
        >
            <FocusLock>
                <div
                    className={clsx(
                        'flex flex-col',
                        'w-full md:w-144',
                        'text-light',
                        'dark-box rounded-md',
                        'font-condensed',
                    )}
                >
                    <div className='flex justify-between items-center px-2 py-1'>
                        <h1 className='font-bold uppercase'>
                            {title}
                        </h1>
                        <UIButton
                            className='p-1'
                            onClick={close}
                        >
                            <FaWindowClose />
                        </UIButton>
                    </div>
                    <hr className='border-light-2' />
                    <div className='flex flex-col p-2'>
                        {body}
                    </div>
                    <hr className='border-light-2' />
                    <div className='flex w-full justify-end gap-2 px-2 py-1'>
                        <UIButton
                            className='px-1'
                            onClick={close}
                        >
                            {closeText}
                        </UIButton>
                        <UIButton
                            className='px-1 bg-marvel-red'
                            onClick={summit}
                        >
                            {summitText}
                        </UIButton>
                    </div>
                </div>
            </FocusLock>
        </div>
    )
}

export default Modal