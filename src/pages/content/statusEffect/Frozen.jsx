import image from '../../../assets/images/combat/frozen.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Frozen = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Frozen Captain America'
      />
      <StatusText title='Frozen'>
        While frozen, a character can’t attempt any action, and its Speed is 0.
        Every turn on this status, the character takes 1d12 cold damage. To
        break free, the player must cast a fire attack or save to 17 Strength at the end of their turn.
        All attacks against this character are thrown in advantage, but they
        have a 50% chance of letting the frozen character free.
        Any character who is set free from the frozen status will get soaked.
      </StatusText>
    </StatusContainer>
  )
}

export default Frozen
