import { Fade } from "react-reveal"
import HomeContainer from '@content/statusEffect/HomeContainer'
import HomeText from '@content/statusEffect/HomeText'

const HeroFade = (props) => {

    const { src, alt, title, description, ...otherProps } = props

    return (
        <Fade
            duration={1500}
            {...otherProps}
        >
            <div className='relative'>
                <img
                    className='h-144 md:h-112 object-cover w-full'
                    src={src}
                    alt={alt}
                />
                <div className='z-20 w-full h-full bg-black'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <HomeContainer
                            reverse
                            className='px-10'
                        >
                            <Fade duration={3000}>
                                <HomeText
                                    title={title}
                                    className='text-white'
                                >
                                    {description}
                                </HomeText>
                            </Fade>
                        </HomeContainer>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default HeroFade