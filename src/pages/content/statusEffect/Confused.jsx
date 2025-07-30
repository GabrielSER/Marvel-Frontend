import image from '../../../assets/images/combat/confused.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Confused = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Confused Spider-Men'
      />
      <StatusText title='Confused'>
        When attacking, a confused character will select a random target. In case of radial attack
        it will center the attack on a random target. It lasts for until the affected character saves to 15 wisdom at the end of their turn.
      </StatusText>
    </StatusContainer>
  )
}

export default Confused
