import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

const TextArea = (props) => {

  const textAreaRef = useRef()
  const {
    className,
    name,
    state,
    setState,
    onChange,
    ...otherProps
  } = props

  const value = useMemo(() => props.value ?? state?.[name], [props])

  const setAreatHeight = useCallback(() => {
    const textArea = textAreaRef?.current
    if (textArea?.style.height.replace('px', '') <= textArea?.scrollHeight) {
      textArea.style.height = textArea.scrollHeight + 'px'
    }
  }, [textAreaRef])

  const onValueChanged = useCallback((event) => {
    const value = event.target.value
    if (onChange) {
      const change = { value, event }
      if (name) {
        change.name = name
      }
      onChange(change)
    }
    if (setState) {
      setState(previous => ({ ...previous, [name]: value }))
    }
  }, [textAreaRef, onChange, setState])

  useEffect(() => {
    setAreatHeight()
  }, [setAreatHeight])

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      className={clsx(
        'w-full',
        'bg-transparent',
        'outline-none',
        'py-1 px-2',
        'resize-y',
        'h-[6em] min-h-[3em] max-h-[30em]',
        className
      )}
      onChange={onValueChanged}
      spellCheck={false}
      {...otherProps}
    />
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default TextArea
