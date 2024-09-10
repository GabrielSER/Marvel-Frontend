import image from '../../../assets/images/combat/possessed.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Possessed = () => {
  return (
    <StatusContainer>
      <StatusText title='Possessed'>
        A possessed character has the possessor’s consciousness inside his body.
        The possessor has advantage on any ability check to interact socially
        with the character and can control its victim to do any kind of action
        he wants. Each turn, the possessed character must save to 19 Wisdom to
        free himself.
      </StatusText>
      <StatusImage
        src={image}
        alt='Ghost Rider'
      />
    </StatusContainer>
  )
}

export default Possessed
