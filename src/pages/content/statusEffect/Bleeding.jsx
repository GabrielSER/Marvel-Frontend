import image from '../../../assets/images/combat/bleeding.png'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Bleeding = () => {
    return (
        <StatusContainer>
            <StatusText title='Bleeding'>
            When bleeding, a character’s defense lowers by 1 and takes 1d6 damage each turn. If a character is hit while bleeding, the bleeding has 50% chance of getting worse, which will add another 1d6 damage each turn. This status will last until a long rest is taken, or until the open wound is either covered with a bandage or cauterized. Characters with lesser healing factor can cure from bleeding with a Durability check of 15 and characters with a regenerative healing factor can cure with a Durability check of 12. If a character gets hit and obtains 6d6 of bleeding it will die of blood loss.
          </StatusText>
            <StatusImage src={image} alt='Bleeding Spider-Man'/>
        </StatusContainer>
    )
}

export default Bleeding