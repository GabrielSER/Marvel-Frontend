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
        Attacks made by a confused character are thrown in disadvantage. It
        lasts for until the affected character saves to 15 wisdom, but the throw
        can only be attempted after 1 turns after getting confused.
      </StatusText>
    </StatusContainer>
  )
}

export default Confused
