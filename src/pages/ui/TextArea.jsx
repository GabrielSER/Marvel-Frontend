import React, { useRef } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const TextArea = (props) => {

    const textAreaRef = useRef()

    const {
        className,
        name,
        state,
        setState,
        onChange
    } = props

    const properties = { ...props }
    properties.value = props.value ?? state?.[name]

    delete properties.className
    delete properties.name
    delete properties.onChange
    delete properties.state
    delete properties.setState

    const onValueChange = (event) => {
        const value = event.target.value
        const textArea = textAreaRef?.current
        if (textArea?.style.height.replace('px', '') <= textArea?.scrollHeight) {
            textArea.style.height = textArea.scrollHeight + 'px'
        }
        if (onChange) {
            const change = { value, event }
            if (name) {
                change.name = name
            }
            onChange(change)
        }
        if (setState) {
            setState({ ...state, [name]: value })
        }
    }

    return (
        <textarea
            ref={textAreaRef}
            className={clsx(
                'w-full',
                'py-1 px-2',
                'resize-y',
                'h-[6em] min-h-[3em] max-h-[6em]',
                className
            )}
            onChange={onValueChange}
            spellCheck={false}
            {...properties}
        />
    )
}

TextArea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
}

export default TextArea
