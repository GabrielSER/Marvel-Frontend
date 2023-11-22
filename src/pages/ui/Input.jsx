import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef((props, ref) => {

    const {
        name,
        onChange,
        state,
        setState,
        onValidate
    } = props

    const properties = { ...props }
    properties.value = props.value ?? state?.[name]

    delete properties.name
    delete properties.state
    delete properties.setState
    delete properties.onChange

    const onInputChange = (event) => {
        const value = event.target.value
        if (onChange) {
            const change = { value, event }
            if (name) {
                change.name = name
            }
            onChange(change)
        }
        setState?.({ ...state, [name]: value })
        onValidate?.(value)
    }

    return (
        <input
            ref={ref}
            onChange={onInputChange}
            autoComplete='new-input'
            spellCheck={false}
            {...properties}
        />
    )

})

const inputTypes = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
]

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(inputTypes),
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    setState: PropTypes.func
}

export default Input