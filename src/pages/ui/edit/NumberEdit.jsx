import Input from '../Input'

const NumberEdit = (props) => {
  const { value, setValue } = props

  return (
    <div className='flex w-full justify-center'>
      <Input
        className='flex bg-transparent outline-none text-center w-min caret-primary'
        value={value}
        type='number'
        onChange={(change) => setValue(change.value)}
      />
    </div>
  )
}

export default NumberEdit