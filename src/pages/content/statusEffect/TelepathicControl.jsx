import image from '../../../assets/images/combat/telepath.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const TelepathicControl = () => {
    return (
        <StatusContainer>
            <StatusText title='Telepathic Control'>
            A character that is being controlled can’t attack the telepath or target the telepath with harmful Abilities or effects. The telepath has advantage on any ability check to interact socially with the character and can control its victim to do any kind of action he wants. Each turn, the controlled character must save to 18 Intelligence or 15 Wisdom to free himself. If the victim receives more than 12 HP Damage, the controller must save to 14 wisdom to keep controlling its victim.
           </StatusText>
            <StatusImage src={image} alt='Jean Grey' />
        </StatusContainer>
    )
}

export default TelepathicControl