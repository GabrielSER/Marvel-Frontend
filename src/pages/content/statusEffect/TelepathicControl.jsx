import image from '../../../assets/images/combat/telepath.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const TelepathicControl = () => {
  return (
    <StatusContainer>
      <StatusText title='Telepathic Control'>
        A telepath can use their powers to control any actions or movement of another character.
        Each turn, the controlled character must save to 18 Wisdom to
        free themselves. If the victim receives damage,
        the telepath must save to 15 telepathy to keep controlling their victim.
      </StatusText>
      <StatusImage
        src={image}
        alt='Jean Grey'
      />
    </StatusContainer>
  )
}

export default TelepathicControl
