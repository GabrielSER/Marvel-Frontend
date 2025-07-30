import image from '../../../assets/images/combat/grappled.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Grappled = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Grappled Thing'
      />
      <StatusText title='Grappled'>
        A grappled character is trapped, and its speed is now 0. All attacks made while in this status are thrown in disadvantage. All attacks against this character are thrown in advantage. At the end of each of its turns the grappled character can attempt to break free, for this they must succeed a strength check of 14 or higher if the check is not specified. In the case of the grappler keeping the grapple with his own body this is a strength duel.
      </StatusText>

    </StatusContainer>
  )
}

export default Grappled
