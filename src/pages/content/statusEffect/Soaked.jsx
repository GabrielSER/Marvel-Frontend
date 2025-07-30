import image from '../../../assets/images/combat/soaked.png'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Soaked = () => {
  return (
    <StatusContainer>
      <StatusText title='Soaked'>
        A soaked character receives double damage from cold and electric attacks
        and half damage by fire attacks. When dashing or jumping they must
        succeed an acrobatics throw of 13 or they will slip and fall prone.
        It lasts until the end of the battle or until it receives fire damage.
      </StatusText>
      <StatusImage
        src={image}
        alt='Hydro Man'
      />
    </StatusContainer>
  )
}

export default Soaked
