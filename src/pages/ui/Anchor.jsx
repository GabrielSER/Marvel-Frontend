import { armooniaClass } from './common'

const Anchor = (props) => {

    const { className, children } = props
    const properties = { ...props }
    delete properties.className
    delete properties.children

    return (
        <a
            className={armooniaClass(className)}
            {...properties}
        >
            {children}
        </a>
    )
}

export default Anchor
