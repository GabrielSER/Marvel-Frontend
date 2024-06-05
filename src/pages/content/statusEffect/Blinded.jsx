import image from '../../../assets/images/combat/blinded.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Blinded = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Daredevil'
      />
      <StatusText title='Blinded'>
        A blinded character can’t see and automatically fails any ability check
        that requires sight. Attack rolls against the character have advantage,
        and the character’s attack rolls are thrown in disadvantage. When not
        specified, this status lasts for 1d6 turns.
      </StatusText>
    </StatusContainer>
  )
}

export default Blinded
