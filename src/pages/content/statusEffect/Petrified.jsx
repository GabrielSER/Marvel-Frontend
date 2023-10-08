import image from '../../../assets/images/combat/petrified.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Petrified = () => {
    return (
        <StatusContainer reverse>
            <StatusImage src={image} alt='Petrified Avengers' />
            <StatusText title='Petrified'>
                While petrified, a character can’t attempt any action, and its Speed is 0. He cannot either see anything. To break free, the player must save to 19 Strength. All attacks against this character are thrown in advantage, but they have a 50% chance of letting the petrified character free. However, there is 5% chance that an attack will break the rock and kill the petrified character. If a character stay petrified for more than 10 turns, it dies.
            </StatusText>
        </StatusContainer>
    )
}

export default Petrified