import Title from '../../ui/Title'

const Hp = () => {
  return (
    <div className='flex gap-4 items-center w-full'>
      <Title className='self-start'>HP (Hit Points):</Title>
      <p className='text-gray-700 text-left'>
        {' '}
        Represents the character's health or life force. HP points are lost
        every time a character recieves damage. Once the HP is down to 0 the
        character falls and is in danger of dying.
      </p>
    </div>
  )
}

export default Hp
