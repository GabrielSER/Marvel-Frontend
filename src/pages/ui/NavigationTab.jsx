import clsx from "clsx"

const NavigationTab = (props) => {

    const {className, active} = props
    
    const properties = {...props}
    delete properties.className
    delete properties.active

    return (
        <span
            className={clsx(
                'flex',
                'justify-center items-center',
                'p-1',
                'text-light',
                'hover:scale-105',
                'opacity-80 hover:opacity-100',
                active && [
                    'border-b-4 border-primary',
                    'opacity-100'
                ],
                className
            )}
            {...properties}
        />
    )
}

export default NavigationTab