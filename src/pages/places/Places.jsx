import clsx from 'clsx'
import EarthXXXX from '../../assets/images/places/place.png'
import Venom from '../../assets/images/combat/Venom.png'
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
            src={Critical}
            alt='Critical Table'
          />
        </div>
      </Section>

      <Section>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center'>
          <BigTitle>Failure</BigTitle>
          <Paragraph>
            If a character gets 1 in their 1d20 check for any action, not only the action fails, but it produces a negative effect on the character which will be determined by the GM according to the circumstances. However, if this action is attempted during combat against an enemy, the character who failed the action will throw 1d100, and according to the result, they will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Failure}
              alt='Failure'
            />
          </div>
        </div>

        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Gwen}
              alt="Spider-Man's Failure"
            />
          </div>
        </div>
      </Section>


      <div className='max-w-5xl p-2 mx-auto items-center'>
        <BigTitle>Powers</BigTitle>
        <Paragraph>
          Powers are special abilities that are unique to each character. For using these powers, you must spend points from your power meter. When a battle starts, you can increase your power meter in 1d4. Every long rest, your power meter fully recharges. Powers are classified according to a level: LV1 powers, LV2 powers, LV3 powers, LV4 powers, special powers, and Ultimate powers.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={PowersDesc}
            alt='Powers desc'
          />
        </div>
        <Paragraph>
          Powers can also vary in Psychic, Melee, Magic, or Energy. This indicates the damage bonus. All damage done by psychic attacks will have + Wisdom damage. However, some Psychic powers don’t do any damage. All damage done by melee attacks will have + Strength damage (not to be confused with the melee stat). All damage done by energy attacks will have + Energy Projection damage. All damage done by Magic attacks will have + magic damage. There are also Unique powers which bonus is determined on the power’s description. Support powers don’t do any damage but have special effects that will aid in battle. Psychic, Melee, Energy, Magic, Unique  and Support powers have a P, M, E, MG, U and S marked before the name of the power, respectively.
        </Paragraph>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <Paragraph>
          Here’s an example of a power:
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={PowerExample}
            alt='Powers Example'
          />
        </div>
        <p className='text-gray-700 text-center'>
          •	The blue color indicates that is a power 1 attack.
        </p>
        <p className='text-gray-700 text-center'>
          •	M indicates that it gets a +melee stat bonus damage.
        </p>
        <p className='text-gray-700 text-center'>
          •	Web Snare is the name of the power.
        </p>
        <p className='text-gray-700 text-center'>
          •	'(Projectile)' Indicates the kind of attack it is. Since it’s a projectile, it is followed by '(90ft range)' which indicates the projectile's reach.
        </p>
        <p className='text-gray-700 text-center'>
          •	'Accuracy' indicates the skill or stat check required for the attack to be successful, Not all powers require checks.
        </p>
        <p className='text-gray-700 text-center'>
          •	After that, there’s a description of the power and everything it does.
        </p>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <Paragraph>
          If you are out of power points, you can only deal normal or weapon attacks. When defeating a normal enemy, you can recharge 1 power point, and when you defeat a boss, you can recharge 3 power points even if it exceeds your base power meter. However, when having a long rest, your power meter returns to its default value.
          Every character has a Power Stat, which determines the amount of power points available at each level.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-xL rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={PowerLevel}
            alt='Powers Levels'
          />
        </div>
      </div>

      <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center'>
        <BigTitle>Status Effects</BigTitle>
        <p className='text-gray-700 mb-2 text-center'>
          A character can be affected by many different kinds of status effects during combat. This is a list of different statuses and their descriptions:
        </p>
      </div>

      <Content id='bleeding' />

      <Content id='blinded' />

      <Content id='burned' />

      <Content id='charmed' />

      <Content id='comatose' />

      <Content id='confused' />

      <Content id='concentrated' />

      <Content id='deafened' />

      <Content id='drugged' />

      <Content id='drunk' />

      <Content id='frightened' />

      <Content id='frozen' />

      <Content id='grappled' />

      <Content id='irradiated' />

      <Content id='prone' />

      <Content id='invisible' />

      <Content id='paralyzed' />

      <Content id='petrified' />

      <Content id='possessed' />

      <Content id='poisoned' />

      <Content id='purple' />

      <Content id='sleeping' />

      <Content id='soaked' />

      <Content id='stunned' />

      <Content id='telepath' />

      <BigTitle>Level Up</BigTitle>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Paragraph>
            Every battle gives experience to all characters in a party. With enough experience the whole party can level up. Every time a character levels up, it gains 10 hp and wins an specific amount of Skill Points that can be spent on unlocking different powers or improve stats and skills. On levels 10 and 20 it gains 20 hp. The amount of skill points won on each level up can be seen on the following table:
          </Paragraph>
          <img
            className='lg:max-w-lg max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Skilllvl}
            alt='Skill up points per level'
          />
        </div>
        <div className='lg:max-w-5xl max-w-xs p-2 mx-auto items-center align-middle lg:px-24 px-0'>
          <Paragraph>
            Powers can be unlocked using skill points once you have the level required for unlocking that given power. The skill point cost for unlocking powers can be seen in this table:
          </Paragraph>
          <img
            className='lg:max-w-md max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Powerlvl}
            alt='Power skill points per level'
          />
          <Paragraph>
            Skills can also be improved using the skill points. The following table shows how many skill points does it cost to increase your skill to a certain level:
          </Paragraph>
          <img
            className='lg:max-w-sm max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Skilvl}
            alt='Skill cost per level'
          />
          <Paragraph>
            Increasing negative stats or skills have the same cost that their positive counterparts
          </Paragraph>
        </div>
      </div>

    </div >

  )
}

export default Places