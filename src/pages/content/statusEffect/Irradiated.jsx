import image from '../../../assets/images/combat/irradiated.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Irradiated = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='The Incredible Hulk'
      />
      <StatusText title='Irradiated'>
        While in this status, a character gets 1d6 each turn, its perception is
        reduced to 0 and its strength, defense and agility is reduced in 1 point. If a character is hit with a radioactive
        attack while in this status, the effect will gain another 1d6 damage.
        Every character that touches or does a melee attack against an irradiated character has 30% chance of
        also getting irradiated. The victim must surpass a durability check of 19 to remove the status at the end of their turn.
      </StatusText>
    </StatusContainer>
  )
}

export default Irradiated
