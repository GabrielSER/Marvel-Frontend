import { useState } from 'react'
import clsx from 'clsx'

const initialState = {
    open: false
}

const DefaultOption = (props) => {
    return (
        <div className='w-full px-3 py-2'>
            {props.value}
        </div>
    )
}

const Select = (props) => {

    const {
        component = DefaultOption,
        onChange,
        name,
        state,
        setState,
        options = [],
        valueField,
        dropdownStyle
    } = props

    const properties = { ...props }
    properties.value = props.value ?? state?.[name]

    delete properties.component
    delete properties.onChange
    delete properties.name
    delete properties.state
    delete properties.setState
    delete properties.options
    delete properties.valueField
    delete properties.dropdownStyle
    delete properties.children

    const [selectState, setSelectState] = useState(initialState)

    const onSelectChange = (option) => {
        const value = valueField ? option[valueField] : option
        if (onChange) {
            const change = { value }
            if (name) {
                change.name = name
            }
            onChange(change)
        }
        setState?.({ ...state, [name]: value })
    }

    return (
        <div
            {...properties}
            onClick={() => setSelectState({ ...selectState, open: !selectState.open })}
            onBlur={() => setSelectState({ ...selectState, open: false })}
            tabIndex={1}
        >
            <div className='flex w-full justify-between'>
                {
                    component({
                        option: options.find(o => o.value === properties.value),
                        value: properties.value,
                        selected: true
                    })
                }
                <span className={clsx(
                    'absolute',
                    'h-full',
                    'right-0',
                    'flex items-center',
                    'hover:opacity-50',
                    selectState.open && 'opacity-50'
                )}
                >
                    <i className='fas fa-angle-down px-4' />
                </span>
            </div>
            {
                selectState.open &&
                <div
                    className={clsx(
                        'absolute',
                        'flex flex-col',
                        'z-20',
                        'top-full',
                        'w-full',
                        'max-h-[100px]',
                        'overflow-y-auto',
                        'overflow-visible',
                        dropdownStyle
                    )}
                >
                    {
                        options.map((option, index) =>
                            <div
                                key={index}
                                className='block'
                                onClick={() => onSelectChange(option)}
                            >
                                {
                                    component({
                                        option,
                                        value: valueField ? option[valueField] : option,
                                        selected: false
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Select
