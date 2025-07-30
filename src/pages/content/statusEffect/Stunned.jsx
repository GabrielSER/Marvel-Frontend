import image from '../../../assets/images/combat/stunned.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Stunned = () => {
  return (
    <StatusContainer>

      <StatusText title='Stunned'>
        A character stunned cannot perform any kind of action or movement.
        Every attack against a stunned character is done in advantage. It lasts for 1 turn.
      </StatusText>
      <StatusImage
        src={image}
        alt='Stunned Kingpin'
      />
    </StatusContainer>
  )
}

export default Stunned
