import image from '../../../assets/images/combat/stunned.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Stunned = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Stunned Kingpin'
      />
      <StatusText title='Stunned'>
        A character can’t make any kind of action while stunned. If not
        specified, the victim must save Durability to 14 to remove the effect.
        Every attack against a stunned character is done in advantage. It lasts
        a maximum of 3 turns
      </StatusText>
    </StatusContainer>
  )
}

export default Stunned
