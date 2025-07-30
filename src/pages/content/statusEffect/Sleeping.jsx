import image from '../../../assets/images/combat/sleeping.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Sleeping = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Sleeping Spider-Man'
      />
      <StatusText title='Sleeping'>
        A sleeping induced character will stay asleep until another character uses their action to wake them up, is awaked by loud
        sounds, or by being hit.
      </StatusText>
    </StatusContainer>
  )
}

export default Sleeping
