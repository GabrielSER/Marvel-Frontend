import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

const paddingYPercent = 0.2
const paddingXPercent = 0.05

const initialState = {
    paddingX: 0,
    paddingY: 0,
    fontHeight: 0
}

const MarvelLogo = (props) => {

    const { className, ...otherProps } = props

    const parent = useRef(null)
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const handleResize = (entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect
                const paddingX = width * paddingXPercent
                const paddingY = height * paddingYPercent
                const fontHeight = height + paddingY
                setState({
                    paddingX,
                    paddingY,
                    fontHeight
                })
            }
        }

        const resizeObserver = new ResizeObserver(handleResize)

        if (parent.current) {
            resizeObserver.observe(parent.current)
        }

        return () => {
            if (parent.current) {
                resizeObserver.unobserve(parent.current)
            }
        }
    }, [parent.current])

    return (
        <span
            ref={parent}
            className={clsx(
                className,
                parent.current === null && 'hidden',
                parent.current !== null && 'flex',
                'justify-center items-center',
                'text-center font-normal font-marvel',
                'bg-marvel-red',
                'border border-white',
                'overflow-hidden'
            )}
            style={{
                paddingTop: state.paddingY,
                paddingLeft: state.paddingX,
                paddingRight: state.paddingX,
                fontSize: state.fontHeight
            }}
            {...otherProps}
        >
            MARVEL
        </span>
    )
}

export default MarvelLogo