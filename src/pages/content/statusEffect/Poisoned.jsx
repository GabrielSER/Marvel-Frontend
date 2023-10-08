import image from '../../../assets/images/combat/poisoned.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Poisoned = () => {
    return (
        <StatusContainer reverse>
            <StatusImage src={image} alt='Omega Red' />
            <StatusText title='Poisoned'>
                Each turn, a poisoned character takes damage. The damage dice dealt to a poisoned character increases each turn, starting with 1d4, and the next turn increasing to 1d6, repenting until it gets to 1d20, the next turn another 1d4 gets added and the process repeats. Normal poison can be cured by a durability throw of 14, Bad Poison can be cured by a durability throw of 17, and a mortal poison can only be cured by an antidote or by healing powers. However, durability throws for healing poisoning can only be attempted after 3 turns of poison damage.
            </StatusText>
        </StatusContainer>
    )
}

export default Poisoned