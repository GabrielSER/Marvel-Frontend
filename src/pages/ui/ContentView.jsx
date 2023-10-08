import { useState } from 'react'
import Content from './Content'
import clsx from 'clsx'

const ContentViewport = (props) => {

    const {
        id,
        params = {},
        left,
        right,
        top,
        bottom,
    } = props

    return (
        <div
            className={clsx(
                'absolute',
                'flex',
                'flex-shrink',
                'w-[370px] md:w-144 max-h-104',
                'p-2',
                left && 'right-full',
                right && 'left-full',
                top && 'bottom-full',
                bottom && 'top-full',
                'overflow-x-hidden',
                'overflow-y-auto',
                'rounded-md',
                'border border-light',
                'z-50'
            )}
            style={{
                backgroundImage: `url(https://i.ibb.co/Jqr4f35/backgound.png)`,
                backgroundRepeat: 'repeat'
            }}
        >
            <Content
                id={id}
                params={params}
            />
        </div>
    )
}

const ContentView = (props) => {

    const {
        text,
        id,
        params = {},
        to,
        left,
        right,
        top,
        bottom,
        className
    } = props

    const [hovered, setHovered] = useState(false)

    return (
        <label
            className={clsx(
                'relative',
                'bottom-full',
                className
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
            {
                hovered &&
                <ContentViewport
                    id={id}
                    params={params}
                    left={left}
                    right={right}
                    top={top}
                    bottom={bottom}
                />
            }
        </label>
    )
}

export default ContentView