import image from '../../../assets/images/combat/bleeding.png'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Bleeding = () => {
  return (
    <StatusContainer>
      <StatusText title='Bleeding'>
        When bleeding, a character takes 1d6 damage at the end of their turn.
        If a character is hit while bleeding, the bleeding has 50%
        chance of getting worse, which will add another 1d6 damage each turn.
        This status will last until a long rest is taken, or until the open
        wound is either covered with a bandage or cauterized. Characters with
        lesser healing factor with reduce 1d6 bleeding at the beggining of their turn
        and characters with a regenerative healing factor will reduce 3d6 bleeding at the beggining of their turn.
      </StatusText>
      <StatusImage
        src={image}
        alt='Bleeding Spider-Man'
      />
    </StatusContainer>
  )
}

export default Bleeding
