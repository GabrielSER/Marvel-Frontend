import image from '../../../assets/images/combat/drugged.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Drugged = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Drugged Harry Osborn'
      />
      <StatusText title='Drugged'>
        A drugged character obtains one or more effects depending on the drug
        received. In addition, the player must make a Durability save to
        determine if the character becomes addicted.
      </StatusText>

    </StatusContainer>
  )
}

export default Drugged
