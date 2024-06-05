import image from '../../../assets/images/combat/burned.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Burned = () => {
  return (
    <StatusContainer>
      <StatusText title='Burned'>
        Each turn, a burned character must take 1d6 damage. While burned, this
        character’s physical attacks will deal half damage. This status lasts
        until the end of the battle, or until the character gets any kind of
        fire extinguisher or until it makes a Durability throw of 14. Doesn’t
        apply underwater.
      </StatusText>
      <StatusImage
        src={image}
        alt='Burned Wolverine'
      />
    </StatusContainer>
  )
}

export default Burned
