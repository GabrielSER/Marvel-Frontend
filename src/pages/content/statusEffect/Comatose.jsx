import image from '../../../assets/images/combat/comatose.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Comatose = () => {
  return (
    <StatusContainer>
      <StatusText title='Comatose'>
        A character in coma, sleeps permanently. A player can attempt to awake a
        comatose character once per day, but he only has 10% chance of doing so.
      </StatusText>
      <StatusImage
        src={image}
        alt='Comatose Tony'
      />
    </StatusContainer>
  )
}

export default Comatose
