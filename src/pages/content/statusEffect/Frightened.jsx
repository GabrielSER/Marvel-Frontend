import image from '../../../assets/images/combat/frightened.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Frightened = () => {
  return (
    <StatusContainer>
      <StatusText title='Frightened'>
        When frightened, a character must make a wisdom check of 12 at the beginning of their turns
        or it will try to run away from the enemy that caused this status. If the wisdom
        check is succeded, the victim can attempt an attack against the
        character that caused him the frightened effect. However, all attacks
        attempted by the victim against this character will be thrown in
        disadvantage. if the wisdom check is failed, the character will run 30
        ft away from the causer of this status. A frightened character has 20%
        chance of getting stunned because of fear every turn this status lasts.
        If the duration is not specified, frightening lasts for 3 turns.
      </StatusText>
      <StatusImage
        src={image}
        alt='Frightened Ms Marvel'
      />
    </StatusContainer>
  )
}

export default Frightened
