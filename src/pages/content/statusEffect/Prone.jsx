import image from '../../../assets/images/combat/fallen.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Prone = () => {
  return (
    <StatusContainer>
      <StatusText title='Prone after fall'>
        Prone is a condition that represents a character lying on the ground.
        All attacks against this
        character are thrown in advantage. A prone character can only stand up
        in their turn by using half of their movement speed for that turn. If
        succeding in an agility check of 18, the fallen character can get up
        keeping all their movement speed.
      </StatusText>
      <StatusImage
        src={image}
        alt='Prone Rogue'
      />
    </StatusContainer>
  )
}

export default Prone
