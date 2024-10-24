import TextArea from '../TextArea'

const TextEdit = (props) => {
    const { value, setValue } = props

    return (
      <TextArea
        value={value}
        onChange={(change) => setValue(change.value)}
      />
    )
  }

export default TextEdit