import clsx from 'clsx'
import EarthXXXX from '../../assets/images/places/place.png'
import Planet from '../../assets/images/places/planet.webp'
import Microverse from '../../assets/images/places/microverse.webp'
import Combo from '../../assets/images/combat/combat.jpg'
import TVA from '../../assets/images/places/TVA.jpg'
import Oportunity from '../../assets/images/combat/oportunity.jpg'
import Dash from '../../assets/images/combat/dash.jpg'
import Help from '../../assets/images/combat/help.jpg'
import Psychic from '../../assets/images/combat/psychic.jpg'
import Critical from '../../assets/images/combat/Critical.PNG'
import Failure from '../../assets/images/combat/Failure.PNG'
import Elektra from '../../assets/images/combat/elektradeath.jpg'
import Gwen from '../../assets/images/combat/spiderfailure.png'
import PowersDesc from '../../assets/images/combat/Powers.PNG'
import PowerExample from '../../assets/images/combat/PowerExample.PNG'
import PowerLevel from '../../assets/images/combat/powerLevel.PNG'
import Skilllvl from '../../assets/images/combat/Levelup.PNG'
import Powerlvl from '../../assets/images/combat/powerlevelskill.PNG'
import Skilvl from '../../assets/images/combat/skillskill.PNG'
import ContentView from '../ui/ContentView'
import Content from '../ui/Content'
import { DiceType } from '../content/dice/Dice'
import ContentScope from '../ui/ContentScope'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'

const BigTitle = (props) =>

  <div className='flex flex-col items-center'>
    <div className='flex flex-row w-auto'>
      <ComicTitlePanel>
        <h1
          className='text-4xl font-semibold text-center'
          {...props}
        />
      </ComicTitlePanel>
    </div>
  </div>



const Title = (props) =>
  <ComicTitlePanel className='bg-comic-secondary self-center'>
    <h2
      className='text-lg font-semibold text-center'
      {...props}
    />
  </ComicTitlePanel>

const Paragraph = (props) =>
  <div
    className='text-gray-700 text-justify px-10'
    {...props}
  />

const Section = (props) =>
  <div className='flex flex-col w-full space-y-4'
    {...props}
  />

const Places = () => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-wrap',
        'items-center',
        'justify-center',
        'py-6 px-8',
        'min-h-screen gap-y-20'
      )}
    >
      <Section>
        <div className='flex flex-row self-center py-10'>
          <ComicTitlePanel>
            <h1
              className='text-5xl font-semibold mt-4 text-center'>
              THE MARVEL UNIVERSE
            </h1>
          </ComicTitlePanel>
        </div>
        <BigTitle>Earth-XXXX</BigTitle>
      </Section>

      <Section>
        <Paragraph>
          Welcome to Earth-XXXX (Being each X any number you want), your very own Marvel Universe.
          You can create your own Universe with your own rules and your own key locations.
        </Paragraph>
        <Paragraph>
          The Marvel Universe has all the features of our reality: same countries, same personalities (politicians, movie stars, presidents, etc.), same historical events (Trojan War, World Wars, 9/11, etc.), and so on. However, it also features distinct ones, such as countries like Wakanda, Latveria, and Genosha, and organizations like the espionage agency S.H.I.E.L.D. and its main enemy, Hydra.
        </Paragraph>


        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-3xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={EarthXXXX}
            alt='Earth-XXXX'
          />
        </div>

      </Section>


      <Section>
        <BigTitle>Dimensions</BigTitle>
        <Paragraph>
          Several dimensions coexist simultaneously without affecting each other directly, ranging from the Earth-like to the totally alien. Some are magical in nature and others are scientific; some are inhabited and others are not. These include realities like the Microverse, Darkforce Dimension, the Mojoverse, and many more.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-4xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Microverse}
            alt='Microverse'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Time</BigTitle>
        <Paragraph>
          Another noteworthy feature of this universe is that time "branches out" creating new alternate realities when certain important events happen. Those realities can also spawn realities of their own. There exist hundreds, probably thousands, or even millions of such realities. It is unknown why this happens, though a warp known as the Nexus of All Realities exists in a swamp in Florida. For the most part this does not matter, as most beings are unaware that this occurs, or even that their universes were recently "born" from another. However, organizations exist which try to monitor or manipulate the various realities. These include the Captain Britain Corps, the Time Variance Authority, and Kang the Conqueror's forces. See Continuities, below.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-5xl max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={TVA}
            alt='TVA'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Planets</BigTitle>
        <Paragraph>
          The main physical dimension of the Marvel Universe is composed by many different planets.
        </Paragraph>
        <Paragraph>
          A Planet is the common designation for a certain type of celestial body usually orbiting a star. They occurred in a great variety of different compositions, masses, and surface conditions. The exact definition of what constituted a planet varied among cultures.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Planet}
            alt='Planet'
          />
        </div>
      </Section>

    
    </div >

  )
}

export default Places