import image from '../../../assets/images/combat/invisible.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Invisible = () => {
  return (
    <StatusContainer>
      <StatusText title='Invisible'>
        An invisible character cannot be seen by any other character. For
        attempting an attack on an invisible character, the attacker must make a
        perception check of 15 to get an estimated location. If failed, the
        attacker won’t be able to attack. If succeeded, this attack will be
        thrown in disadvantage. Characters with superhuman senses like Daredevil
        can detect the location of invisible characters, so they can just attack
        them normally. Other characters with special senses like Spider-Man, can
        detect an estimated location, but their attacks are still thrown in
        disadvantage.
      </StatusText>

      <StatusImage
        src={image}
        alt='Invisible Woman'
      />
    </StatusContainer>
  )
}

export default Invisible
