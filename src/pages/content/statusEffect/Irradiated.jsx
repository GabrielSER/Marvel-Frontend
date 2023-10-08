import image from '../../../assets/images/combat/irradiated.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Irradiated = () => {
    return (
        <StatusContainer reverse>
            <StatusImage src={image} alt='The Incredible Hulk' />
            <StatusText title='Irradiated'>
                While in this status, a character gets 1d6 each turn, its perception is reduced to 0 and its defense is reduced in 2 points. All attacks done against a character irradiated deal double damage, but will also deal 1d6 damage to the attacker. If a character is hit with a radioactive attack while in this status, the effect will gain another d6 damage. Every character that touched an irradiated character has 30% chance of also getting irradiated.
            </StatusText>
        </StatusContainer>
    )
}

export default Irradiated