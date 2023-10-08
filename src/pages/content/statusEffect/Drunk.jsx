import image from '../../../assets/images/combat/drunk.jpg'
import StatusContainer from './StatusContainer'
import StatusImage from './StatusImage'
import StatusText from './StatusText'

const Drunk = () => {
    return (
        <StatusContainer reverse>
            <StatusImage src={image} alt='Drunk Iron Man' />
            <StatusText title='Drunk'>
                When consuming a high number of alcoholic drinks, a character gets drunk, so its intelligence gets reduced in 2 points, and its wisdom and perception gets reduced to 0. A character will stay drunk until it rests. However, after resting, it will have a hangover which will reduce its defense and perception in 2 points.
            </StatusText>
        </StatusContainer>
    )
}

export default Drunk