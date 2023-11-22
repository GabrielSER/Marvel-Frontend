import clsx from 'clsx'
import Input from './Input'

const PrimaryInput = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <Input
            className={clsx(
                'px-3 py-1',
                'border border-primary',
                'caret-primary',
                'bg-transparent',
                'hover:bg-shadow',
                'focus:bg-shadow',
                'rounded-l-full rounded-r-full',
                'focus:outline-none',
                'outline-none',
                clsx(className)
            )}
            {...properties}
        />
    )
}

export default PrimaryInput