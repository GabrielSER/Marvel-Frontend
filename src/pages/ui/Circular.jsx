import clsx from 'clsx'

const Circular = (props) => {

    const {className} = props
    const properties = { ...props }
    delete properties.className

    return (
        <div
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'aspect-square',
                'rounded-full',
                'hover:scale-110',
                'focus:outline-none',
                'overflow-x-hidden',
                'overflow-y-hidden',
                className
            )}
            {...properties}
        />
    )
}

export default Circular