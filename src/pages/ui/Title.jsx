import clsx from 'clsx'

const Title = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <h2
            className={clsx(
                'text-xl font-semibold text-center',
                className
            )}
            {...properties}
        />
    )
}

export default Title