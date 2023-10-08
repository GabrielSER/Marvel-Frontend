import image from '../../../assets/images/combat/grappled.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Grappled = () => {
    return (
        <StatusContainer>
            <StatusText title='Grappled'>
            A grappled character is trapped, and its speed is now 0. All attacks made while in this status are thrown in disadvantage. All attacks against this character are thrown in advantage. If not specified, the player must save to 15 Strength to break free from a grappling object or win a strength duel against the grappler.
          </StatusText>
            <StatusImage src={image} alt='Grappled Thing' />
        </StatusContainer>
    )
}

export default Grappled