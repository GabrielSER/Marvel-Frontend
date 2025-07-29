import image from '../../../assets/images/combat/Paralyzed.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Paralyzed = () => {
  return (
    <StatusContainer>
      <StatusText title='Paralyzed'>
        A paralyzed character has his speed reduced in half and every turn has a
        50% chance of not being able to perform any action. If not specified, it lasts for 3 turns.
      </StatusText>
      <StatusImage
        src={image}
        alt='Paralyzed Spider-Man'
      />
    </StatusContainer>
  )
}

export default Paralyzed
