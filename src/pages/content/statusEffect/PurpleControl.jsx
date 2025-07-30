import image from '../../../assets/images/combat/purple.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const PurpleControl = () => {
  return (
    <StatusContainer reverse>

      <StatusImage
        src={image}
        alt='Purple Man'
      />
      <StatusText title='Purple Control'>
        A character controlled by Purple Man, when receiving a verbal command
        from him, will stop doing whatever action they were attempting, and they
        will try to accomplish whatever was ordered to them by purple man. They
        will not stop until they achieve what was ordered or until 12 hours
        pass. A character can be put to sleep for them to stop their current
        actions, but once they wake up, they will start trying to do again
        whatever purple man ordered them.
      </StatusText>
    </StatusContainer>
  )
}

export default PurpleControl
