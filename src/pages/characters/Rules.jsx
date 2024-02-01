import clsx from 'clsx'
import Watcher from '../../assets/images/places/watcher.jpg'
import TOAA from '../../assets/images/places/TOAA.webp'
import Xmen from '../../assets/images/places/xmen.webp'
import Skills from '../../assets/images/places/skills.png'
import Powers from '../../assets/images/places/powers.png'
import Weakness from '../../assets/images/places/weakness.png'
import Bio from '../../assets/images/places/bio.webp'
import Abilities from '../../assets/images/places/abilites.png'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import Whatif from '../../assets/images/places/whatif.jpg'
import NavigationLink from '../common/navbar/NavigationLink'
import { Link } from 'react-router-dom'
import documentPath from '../../assets/docs/Character-Sheet.pdf'

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
  <ComicTitlePanel className='bg-comic-secondary'>
    <h2
      className='text-lg font-semibold text-center'
      {...props}
    />
  </ComicTitlePanel>

const Paragraph = (props) =>
  <div
    className='text-gray-700 text-justify'
    {...props}
  />

const Section = (props) =>
  <div className='flex flex-col w-full space-y-4'
    {...props}
  />

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // This adds a smooth scrolling effect
  });
};

const Rules = () => {
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
        <div className='flex flex-row self-center'>
          <ComicTitlePanel>
            <h1
              className='text-5xl font-semibold mt-4 text-center'>
              GAME MASTER'S GUIDE
            </h1>
          </ComicTitlePanel>
        </div>
        <BigTitle>The One Above All</BigTitle>
      </Section>


      <Section>
        <Paragraph>
          In any role-playing game, adventure, or acquired module or accessory, the Game Master plays a pivotal role. The Game Master is the linchpin of the entire operation; without them, even the most exceptional RPG in the world becomes nothing more than engaging reading.
        </Paragraph>
        <Paragraph>
          So, what is a Game Master? In the All New Marvel Rolleplaying game, the Game Master takes the role of the One Above All, an encarnation of the Marvel Comics Writer, and they serve as the stage-setter, the storyteller, the mediator, and the narrator. They provide the background, narrate what the player characters observe, and control the non-player characters, ranging from significant threats to the universe to minor criminals, innocent bystanders, and other heroes and law enforcement. The Game Master determines the success of a character's actions or if a villain manages to escape. They create challenges for the heroes and share information that enables their success.
        </Paragraph>
        <Paragraph>
          To suggest that the Game Master works against the players, merely because they control the antagonists, is a misnomer and entirely inaccurate. Instead, the Game Master collaborates with the players to craft a delightful, entertaining tale that can be fondly remembered and retold with a smile ("Hey, remember when Dogpool challenged Molecule Man to a duel?"). Entertainment is the core objective. The Game Master and players, in tandem, compose the narrative for their own comic book. Together, the Game Master and players create a final product that is worth discussing and sharing.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-3xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={TOAA}
            alt='The One Above All'
          />
        </div>
        <Paragraph>
          The essence lies in entertainment. The Game Master (GM) and players collaborate to craft the storyline for their personalized comic book. Together, the GM and players generate a finished product that sparks discussions.
        </Paragraph>
        <Paragraph>
          The distinct responsibilities of the Game Master encompass:
        </Paragraph>
        <Paragraph>
          - Describing the scenario to players, offering insights from the player-characters' perspective.
        </Paragraph>
        <Paragraph>
          -Addressing player queries and providing clarity on statements.
        </Paragraph>
        <Paragraph>
          -Assuming the roles of various non-player characters (NPCs) that the player-characters come across.
        </Paragraph>
        <Paragraph>
          -Managing game mechanics.
        </Paragraph>
        <Paragraph>
          -Managing game mechanics.
        </Paragraph>
        <Paragraph>
          -Making decisions or judgments when required in in-game situations.
        </Paragraph>
      </Section >

      <Section>
        <BigTitle>Your Marvel Universe</BigTitle>
        <Paragraph>
          The old comic line of "What If?" played with
          these possible variant universes, where the
          Avengers never happened, Spider-Man
          joined the Fantastic Four, or Jane Foster
          found the Hammer of Thor.
        </Paragraph>

        <Paragraph>
          Similarly, when you begin a Marvel Universe
          campaign, you are creating your own "What
          If" line. Your player-characters are tree from
          what happens in the "mainline" Marvel
          Universe after the campaign has started,
          and in addition, you can add your own
          embellishments, villains, and actions. In your
          universe, Doctor Doom may reform and
          become a good guy, or the Red Skull may
          still be alive. And just because some great
          misfortune occurs to a character in a comic
          book, that same misfortune does not have to
          occur to the characters in your universe.
          Your universe can reflect actions in the
          Marvel Universe, and benefit from its history
          and heritage, but is not tied down to it.
        </Paragraph>

        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Whatif}
            alt='What If?'
          />
        </div>

        <Paragraph>
          The Game Master (GM) controls roleplay by serving as the storyteller, referee, and facilitator of the game world.
          The GM is responsible for creating the setting, presenting challenges, portraying non-player characters (NPCs), and guiding the overall narrative.
          Here are some key ways in which a Game Master controls roleplay:
        </Paragraph>

        <Title>
          World-Building
        </Title>
        <Paragraph>
          The GM establishes the game world, including its history, geography, cultures, and political systems.
          This sets the stage for the players' characters (PCs) to inhabit and interact with the environment.
          Check out the <Link onClick={scrollToTop} className='text-primary' to="/places">Marvel Universe</Link> section to read about key locations, planets, cultures and places from the Marvel Comics.
        </Paragraph>

        <Title>
          Narration and Description
        </Title>
        <Paragraph>
          The GM describes the scenes, environments, and events that unfold in the game.
          This includes providing details about the characters' surroundings, the appearance of NPCs, and the outcomes of their actions.
        </Paragraph>

        <Title>
          NPC Portrayal
        </Title>
        <Paragraph>
          The GM brings NPCs to life by role-playing their personalities, mannerisms, and dialogues.
          This adds depth to the game world and provides the players with characters to interact with.
        </Paragraph>
        <Title>
          Setting the Tone
        </Title>
        <Paragraph>
          The GM establishes the tone and atmosphere of the game, whether it's a serious epic, a lighthearted adventure, or a mixture of both.
          This influences the style of roleplay and the overall experience for the players.
        </Paragraph>
        <Title>
          Presenting Challenges
        </Title>
        <Paragraph>
          The GM introduces challenges and obstacles for the players to overcome.
          These challenges can be in the form of puzzles, combat encounters, diplomatic negotiations, or other situations that require the players to make decisions and roleplay their responses.
        </Paragraph>
        <Title>
          Managing Rules and Mechanics
        </Title>
        <Paragraph>
          The GM enforces the game rules and mechanics, ensuring a fair and consistent experience for the players.
          This includes resolving conflicts, determining the outcomes of actions through dice rolls, and applying the rules of the game.
        </Paragraph>
        <Title>
          Adapting to Player Choices
        </Title>
        <Paragraph>
          The GM adjusts the narrative based on the choices made by the players.
          This flexibility allows for a dynamic and responsive story that evolves organically based on the characters' decisions.
        </Paragraph>
        <Title>
          Encouraging Player Creativity
        </Title>
        <Paragraph>
          The GM fosters a collaborative storytelling environment by encouraging players to contribute to the narrative, describe their character's actions, and engage in creative problem-solving.
        </Paragraph>
        <Title>
          Facilitating Roleplay Between Players
        </Title>
        <Paragraph>
          The GM creates opportunities for roleplay interactions between player characters, fostering character development, relationships, and collaborative storytelling within the group.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-3xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Watcher}
            alt='The Watcher'
          />
        </div>

        <Paragraph>
          By effectively managing these aspects, a skilled Game Master can guide and enhance the roleplay experience, creating a rich and immersive world for the players to explore and influence through their characters.
        </Paragraph>
      </Section>

    </div >

  )
}

export default Rules