import { Fade } from 'react-reveal'
import HomeContainer from '../content/statusEffect/HomeContainer'
import HomeText from '../content/statusEffect/HomeText'
import heroes from '../../assets/images/home/heroes.jpg'
import wakanda from '../../assets/images/home/wakanda.webp'
import avengers from '../../assets/images/home/avengers.jpg'

const HeroHome = () => {
  //const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <div className='text-center py-12 md:py-16 w-full'>
      <div className='w-full mx-auto items-center space-y-10'>
        <Fade
          right
          duration={1500}
        >
          <div className='relative'>
            <img
              className='h-144 md:h-112 object-cover w-full'
              src={avengers}
              alt='Wakanda'
            />
            <div className='z-20 w-full h-full bg-black'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <HomeContainer
                  reverse
                  className='px-10'
                >
                  <Fade duration={3000}>
                    <HomeText
                      title='Play as your favorite Marvel characters'
                      className='text-white'
                    >
                      Welcome to a world where the pages of Marvel Comics come
                      alive, where heroes and villains clash in epic battles
                      that defy imagination. In the All-New Marvel Roleplaying
                      Game, you are not just a player; you are a hero, a
                      champion, a force of nature in a universe brimming with
                      excitement and danger.
                    </HomeText>
                  </Fade>
                </HomeContainer>
              </div>
            </div>
          </div>
        </Fade>

        <Fade
          left
          duration={1500}
        >
          <div className='relative'>
            <img
              className='h-144 md:h-100 lg:h-144 object-cover w-full'
              src={wakanda}
              alt='Wakanda'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <HomeContainer className='px-10'>
                <Fade duration={3000}>
                  <HomeText
                    title='Explore new worlds and locations'
                    className='text-white'
                  >
                    Imagine a city pulsating with energy, skyscrapers towering
                    over streets filled with ordinary people and extraordinary
                    beings. This is the world players and GM’s can create and
                    explore, the beating heart of the Marvel Universe, where the
                    unimaginable becomes reality. Here, you will encounter
                    heroes and villains alike, and will be able to create your
                    own stories based on the legendary characters you know and
                    love.
                  </HomeText>
                </Fade>
              </HomeContainer>
            </div>
          </div>
        </Fade>

        <Fade
          right
          duration={1500}
        >
          <div className='relative'>
            <img
              className='h-144 md:h-100 object-cover w-full'
              src={heroes}
              alt='Wakanda'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <HomeContainer
                reverse
                className='px-10'
              >
                <Fade duration={3000}>
                  <HomeText
                    title='Create your own stories'
                    className='text-white'
                  >
                    Assemble your team, harness your powers, and embark on
                    quests that will test your courage, wit, and determination.
                    The fate of your Marvel Universe rests in your hands. Are
                    you ready to become a legend?
                  </HomeText>
                </Fade>
              </HomeContainer>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default HeroHome
