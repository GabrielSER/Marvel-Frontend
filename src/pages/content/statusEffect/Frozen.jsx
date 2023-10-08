import image from '../../../assets/images/combat/frozen.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Frozen = () => {
    return (
        <StatusContainer reverse>
            <StatusImage src={image} alt='Frozen Captain America' />
            <StatusText title='Frozen'>
                While frozen, a character can’t attempt any action, and its Speed is 0. Every turn on this status, the character takes 1d8 cold damage. To break free, the player must save to 17 Strength or cast a fire attack. All attacks against this character are thrown in advantage, but they have a 50% chance of letting the frozen character free.
            </StatusText>
        </StatusContainer>
    )
}

export default Frozen