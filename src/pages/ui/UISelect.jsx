
import clsx from 'clsx'
import Select from './Select'

const UIOption = (props) => {

    const { value, selected } = props
    const { text } = value

    return (
        <div
            className={clsx(
                'flex',
                'w-32 md:w-40',
                'pl-3 py-1',
                'text-xs md:text-sm',
                'focus:bg-light1/10',
                !selected && 'hover:bg-light1/10',
                'cursor-pointer'
            )}
        >
            {text}
        </div>
    )
}

const UISelect = (props) => {

    const { options } = props

    return (
        <Select
            className={open => clsx(
                'h-32 w-40',
                'flex flex-shrink-0',
                'border',
                'border-light2',
                'hover:border-light1',
                'outline-none'
            )}
            dropdownStyle={clsx(
                'w-40 h-32',
                'rounded-b-2xl',
                'border border-light1',
                'divide-y divide-light2',
                'overflow-x-hidden',
                'overflow-y-auto'
            )}
            options={options}
            component={UIOption}
            {...props}
        />
    )
}

export default UISelect