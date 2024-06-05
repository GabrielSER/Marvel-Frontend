import image from '../../../assets/images/combat/charmed.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Charmed = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Enchantress'
      />
      <StatusText title='Charmed'>
        A charmed character can’t attack the charmer or target the charmer with
        harmful Abilities or effects. The charmer has advantage on any ability
        check to interact socially with the character and can convince the
        charmed character to do any kind of action he wants if it doesn’t
        involve self-harm. Each turn, the player must save to 15 Intelligence or
        18 Wisdom to uncharm the character. If the victim receives more than 12
        HP damage, the controller must save to 18 charilga to keep charming its
        victim.
      </StatusText>
    </StatusContainer>
  )
}

export default Charmed
