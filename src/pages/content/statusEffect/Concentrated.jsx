import image from '../../../assets/images/combat/concentrated.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Concentrated = () => {
  return (
    <StatusContainer>
      <StatusText title='Concentration'>
        Some actions require concentration for them to be executed.
        A character that requires concentration for these actions can move but
        they can’t attempt any other kind of action while concentrating. A
        character that requires high concentration cannot move while
        concentrating. If a character gets attacked while concentrating, it will
        lose its concentration.
      </StatusText>
      <StatusImage
        src={image}
        alt='Concentrated Professor X'
      />
    </StatusContainer>
  )
}

export default Concentrated
