import image from '../../../assets/images/combat/drunk.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Drunk = () => {
  return (
    <StatusContainer reverse>
      <StatusImage
        src={image}
        alt='Drunk Iron Man'
      />
      <StatusText title='Drunk'>
        When consuming a high number of alcoholic drinks at the OAA discretion, a character gets
        drunk, so its intelligence gets reduced in 2 points, its wisdom and perception is reduced in 4 points, and its agility is reduced in 3 points.
        A character will stay drunk until it rests.
        However, after resting the character must achieve a durability check of 16. If failed, it will have a hangover which will reduce its defense and perception in 2 points.
      </StatusText>
    </StatusContainer>
  )
}

export default Drunk
