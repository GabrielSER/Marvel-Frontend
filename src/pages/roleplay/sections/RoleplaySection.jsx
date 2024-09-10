import Section from '@ui/Section'
import clsx from 'clsx'

const RoleplaySection = (props) => {

    const { className, ...otherProps } = props

    return (
        <Section
            className={clsx(
                className,
                'flex flex-col',
                'w-full  max-w-full',
                'px-4 lg:px-0',
                'my-1 lg:my-2',
                'backdrop-blur-sm'
            )}
            {...otherProps}
        />
    )
}

export default RoleplaySection