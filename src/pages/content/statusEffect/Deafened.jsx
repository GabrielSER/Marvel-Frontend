import image from '../../../assets/images/combat/deafened.png'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Deafened = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Deafened Hawkeye'
      />
      <StatusText title='Deafened'>
        A deafened character can’t hear, automatically fails any ability check
        that requires hearing and has disadvantage with acrobatics, athletics,
        or agility throws. It normally lasts for 1d4 turns.
      </StatusText>
    </StatusContainer>
  )
}

export default Deafened
