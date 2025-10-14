import clsx from 'clsx'
import EarthXXXX from '../../assets/images/places/earthxxxx.webp'
import Xmen from '../../assets/images/places/xmen.webp'
import Skills from '../../assets/images/places/skills.png'
import Powers from '../../assets/images/places/powers.png'
import Weakness from '../../assets/images/places/weakness.png'
import Bio from '../../assets/images/places/bio.webp'
import Abilities from '../../assets/images/places/abilites.png'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import { Link } from 'react-router-dom'
import documentPath from '../../assets/docs/Character-Sheet.pdf'
import { HashLink } from 'react-router-hash-link';
import ComicPanel from '../ui/ComicPanel'
import Content from '../ui/Content'
import { DiceType } from '../content/dice/Dice'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This adds a smooth scrolling effect
  })
}

const BigTitle = (props) => (
  <div className='flex flex-col items-center max-w-full'>
    <div className='flex flex-row w-auto'>
      <ComicTitlePanel>
        <h1
          className='text-lg sm:text-4xl font-semibold text-center'
          {...props}
        />
      </ComicTitlePanel>
    </div>
  </div>
)

const Title = (props) => (
  <ComicTitlePanel className='bg-comic-secondary self-center max-w-full'>
    <h2
      className='text-sm sm:text-lg font-semibold text-center'
      {...props}
    />
  </ComicTitlePanel>
)

const Paragraph = (props) => (
  <div
    className='text-gray-700 text-justify'
    {...props}
  />
)

const Section = (props) => (
  <div
    className='flex flex-col w-full space-y-4'
    {...props}
  />
)

const Player = () => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-wrap',
        'items-center',
        'justify-center',
        'py-6 px-8 sm:px-10',
        'min-h-screen gap-y-20'
      )}
    >
      <Section>
        <div className='flex flex-row self-center max-w-full'>
          <ComicTitlePanel>
            <h1 className='text-3xl sm:text-5xl font-semibold mt-4 text-center'>
              PLAYER'S GUIDE
            </h1>
          </ComicTitlePanel>
        </div>

        <div className='flex flex-row self-center  max-w-full'>
          <BigTitle>All the fun begins here.</BigTitle>
        </div>
      </Section>
      <Section>
        <Paragraph>
          Welcome, True Believer!
        </Paragraph>


        <Paragraph>
          This is the All-New MARVEL SUPER HEROES Role-Playing Game, your entry
          point into a universe of imagination and heroic storytelling. This guide
          was crafted for first-time role-players and long-time Marvel fans who’ve
          always dreamed of standing alongside the world’s greatest heroes. Whether
          you’ve battled villains in your mind for years or you’re just curious about
          how it feels to swing through New York as Spider-Man — this guide is for you.
        </Paragraph>

        <Paragraph>
          A role-playing game lets you become someone else for a while — a hero, a villain,
          or even something in between. Instead of running around the yard pretending,
          you and your friends sit together around a table, roll dice, and bring those adventures
          to life through words, choices, and a dash of imagination. Think of it as performing
          in your own comic book — panels and pages drawn by your creativity.
        </Paragraph>

        <Paragraph>
          At the center of every game is the One Above All, known in this universe as the One Above All.
          The One Above All is a player who sets the stage, builds the challenges, and breathes life
          into the world. The One Above All controls the villains’ schemes, the bystanders’ reactions,
          and the chaos that keeps heroes on their toes. They are the unseen narrator, guiding the story
          but never deciding its outcome alone.
        </Paragraph>

        <Paragraph>
          The other players embody the heroes — the heart of the story. You might take the role of Spider-Man,
          She-Hulk, Wolverine, Daredevil or Captain America.
          A hero played by a person is a player character, while those controlled by the One Above All — the villains,
          agents, civilians, and cosmic entities — are called nonplayer characters (NPCs).
        </Paragraph>

        <Paragraph>
          Role-playing is equal parts acting and storytelling. The One Above All provides the world, the setup,
          and the spark, but it’s the players who keep the story alive through their actions and words.
          Imagine reading a comic book that’s being drawn as you turn each page — that’s the spirit of this game.
        </Paragraph>

        <Paragraph>
          The rules exist to help decide what happens when things get uncertain.
          For example: Spider-Man shoots his web to stop Electro’s lightning attack. Who acts first? Who succeeds?
          The dice — and the rules — decide. Even heroes have bad rolls sometimes (sorry, Spidey).
        </Paragraph>

        <Paragraph>
          Everything you need to play is in this website.
          There are different sections that walk you through how to play and how to run battles and adventures.
        </Paragraph>

        <Paragraph>
          The
          {' '} <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/types'
          >
            Heroes
          </Link>{' '}
          Section is filled with the powers and stats of Marvel’s greatest heroes and villains,
          along with tips for players and One Above Alls on how to bring them to life.
        </Paragraph>

        <Paragraph>
          After reading this section, you should check out the
          {' '} <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/combat'
          >
            Combat
          </Link>{' '}
          Section to see how you could use your character attributes in battle.
        </Paragraph>

        <Paragraph>
          Then, take a look at the
          {' '} <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/roleplaying'
          >
            Roleplay
          </Link>{' '}
          Section to see how to act and use your character's abilities and skills to perform and contribute to the storytelling.
        </Paragraph>

        <Paragraph>
          A set of role-playing dice is highly recommended. For convenience, this game uses the same dice set
          found in most popular role-playing systems. These dice are versatile, easy to use, and widely available
          at any hobby or gaming store.
        </Paragraph>

        <ComicPanel className='p-10 bg-comic-primary-light md:w-3/4 self-center'>
          <div className='flex flex-wrap w-full justify-between items-center '>
            {Object.values(DiceType).map((type, index) => (
              <Content
                key={index}
                id='roll'
                params={{ type }}
              />
            ))}
          </div>
        </ComicPanel>

        <Paragraph>
          So grab your dice, summon your courage, and assemble your team.
          The Marvel Universe awaits — and with the One Above All as your guide, the only limit is your imagination
        </Paragraph>
      </Section>
      <Section>
        <div className='flex flex-row self-center  max-w-full'>
          <BigTitle>What is a character?</BigTitle>
        </div>


        <Paragraph>
          In the All-New MARVEL SUPER HEROES Role-Playing Game, players assume
          the identities of heroes, villains and anti-heroes within the Marvel
          Universe. A character controlled by a participant is referred to as a
          Playable-Character or PC. On the other hand, one managed by the OOA,
          encompassing many adversaries and auxiliary characters, is termed a
          Non-Playable Character or NPC.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={EarthXXXX}
            alt='Earth-XXXX'
          />
        </div>
        <Paragraph>
          Characters have different attributes that determine their chances of
          performing certain actions in the game. These attributes are
          abilities, stats, skills and powers.
        </Paragraph>
      </Section>

      <Section>
        <BigTitle>Stats</BigTitle>
        <Paragraph>
          Stats represent numerical values that quantitatively describe a
          character's inherent characteristics. These can include attributes
          like strength, agility, intelligence, and more. Stats provide a
          baseline for the character's capabilities and are often used to
          calculate success or failure in various actions. They serve as a
          foundation for determining a character's overall effectiveness in
          different aspects of the game. A character Stats include:
        </Paragraph>
        <div className='flex flex-col md:flex-row justify-center items-center p-10'>
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-col  items-center w-full p-5'>
              <Title className='self-start'>HP (Hit Points):</Title>
              <p className='text-gray-700 '>
                {' '}
                Represents the character's health or life force. HP points are
                lost every time a character recieves damage. Once the HP is down
                to 0 the character falls and is in danger of dying.
              </p>
            </div>
            <div className='flex flex-col  items-center w-full p-5'>
              <Title className='self-start'>Speed:</Title>
              <p className='text-gray-700 '>
                {' '}
                Indicates the character's movement capability in battle. It
                represents the amount of distance a character can move in a turn.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Defense:</Title>
              <p className='text-gray-700 '>
                {' '}
                Reflects the character's ability to resist attacks. An attack must
                surpass a character's defense to succeed.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Energy Projection:</Title>
              <p className='text-gray-700 '>
                Measures the character's proficiency in projecting energy-based
                attacks.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Strength:</Title>
              <p className='text-gray-700 '>
                Represents the character's physical power.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Intelligence:</Title>
              <p className='text-gray-700 '>
                Reflects the character's mental acuity.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Durability:</Title>
              <p className='text-gray-700 '>
                Indicates the character's resilience to damage.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Agility:</Title>
              <p className='text-gray-700 '>
                Represents the character's speed and dexterity.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Wisdom:</Title>
              <p className='text-gray-700 '>
                Reflects the character's knowledge and intuition.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Power:</Title>
              <p className='text-gray-700 '>
                Represents the amount of power points a character has depending on
                their level.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Combo:</Title>
              <p className='text-gray-700 '>
                {' '}
                Represents the amount of times a character can perform a normal attack in a combo.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Perception:</Title>
              <p className='text-gray-700 '>
                {' '}
                Reflects the character's awareness and ability to notice details.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Charisma:</Title>
              <p className='text-gray-700 '>
                {' '}
                Indicates the character's charm and persuasiveness.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Luck:</Title>
              <p className='text-gray-700 '>
                Represents the character's fortune or chance.
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Xmen}
            alt='X-Men'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Skills</BigTitle>
        <Paragraph>
          In a character sheet, "skills" represent the character's proficiency
          and training in specific areas of expertise. These can encompass a
          wide range of abilities, from combat skills like wielding weapons to
          non-combat skills like diplomacy or stealth. Skills are often
          associated with a numerical rating or level, indicating the
          character's competence in performing tasks related to that skill.
          Skill checks, based on these ratings, are commonly used to determine
          the success of specific actions or endeavors in the game.
        </Paragraph>

        <div className='flex flex-col md:flex-row justify-center items-center p-10'>
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Acrobatics:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to perform agile and complex movements, often involving
                balance, coordination, and flexibility.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Aerial Piloting:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in operating and controlling aircraft or flying vehicles.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Animal Handling:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to interact with and control animals.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Arcana:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge of magical and mystical forces.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Athletics:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in physical activities such as running, jumping,
                climbing, and other exercises requiring strength and stamina.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Bike Piloting:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in riding and controlling motorcycles or similar
                two-wheeled vehicles.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Body Stretching:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to stretch and manipulate one's body beyond normal
                limits.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Chi Control:</Title>
              <p className='text-gray-700 '>
                {' '}
                Mastery over one's life energy for various effects.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Cryokinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control or generation of ice and cold.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Deception:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in misleading or concealing the truth, often used in social
                situations.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Electronics Knowledge:</Title>
              <p className='text-gray-700 '>
                {' '}
                Understanding of electronic systems and devices.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Environmental Awareness:</Title>
              <p className='text-gray-700 '>
                {' '}
                Heightened sensitivity to the surroundings and changes in the
                environment.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Espionage:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in covert operations and intelligence gathering.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Etiquette:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge of proper social behavior and manners.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Explosives:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in handling and using explosive devices.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Firearms:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in using firearms and other ranged weapons.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>First Aid:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge and ability to provide basic medical assistance.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Flight:</Title>
              <p className='text-gray-700 '>
                {' '}
                Ability to fly through the air without the need for external
                assistance.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Gravitokinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control over gravitational forces, allowing manipulation of gravity.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Heavy Equipment Piloting:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in operating large and heavy machinery or vehicles.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>History Knowledge:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge of past events and historical facts.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Hydrokinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control or manipulation of water and liquid substances.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Intimidation:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to instill fear or awe in others.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Intuition:</Title>
              <p className='text-gray-700 '>
                {' '}
                Enhanced perception and understanding beyond logical reasoning.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Investigation:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in examining and analyzing details to solve problems or
                mysteries.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Lockpicking:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to open locks without the use of a key, often involving
                tools or specialized techniques.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Magic:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in casting spells and using magical abilities.
              </p>
            </div>

          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Marksman:</Title>
              <p className='text-gray-700 '>
                {' '}
                Exceptional skill in using ranged weapons with precision and
                accuracy.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Mechanic:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in repairing and maintaining mechanical devices.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Medicine:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge and skill in medical practices and healing.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Melee:</Title>
              <p className='text-gray-700 '>
                {' '}
                Represents the character's effectiveness in close combat.
              </p>
            </div>
            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Melee Weapons:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in using close-quarter combat weapons like swords,
                knives, or other handheld weapons.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Motor Vehicle Piloting:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in driving and controlling motorized vehicles.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Natural Sciences Knowledge:</Title>
              <p className='text-gray-700 '>
                {' '}
                Understanding of scientific principles related to the natural world.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Persuasion:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to convince and influence others effectively.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Pickpocket:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to discreetly steal items from others without being
                noticed.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Power Cosmic:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control over the fundamental forces of the universe.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Pyrokinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control or manipulation of fire and heat.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Ranged Weapons:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in using weapons that can be fired at a distance, such
                as bows, guns, or crossbows.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Radiation:</Title>
              <p className='text-gray-700 '>
                {' '}
                Tolerance and control over radioactive elements and energy.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Religion:</Title>
              <p className='text-gray-700 '>
                {' '}
                Knowledge and understanding of religious beliefs, practices, and
                traditions.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Software Knowledge:</Title>
              <p className='text-gray-700 '>
                {' '}
                Understanding of computer software, programming languages, and
                digital systems.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Spiritual Affinity:</Title>
              <p className='text-gray-700 '>
                {' '}
                Connection and sensitivity to spiritual and metaphysical energies.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Stealth:</Title>
              <p className='text-gray-700 '>
                {' '}
                The ability to move quietly and avoid detection, often used for
                sneaking and surprise attacks.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Survivalist:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in outdoor survival skills, including navigation,
                foraging, and shelter building.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Telekinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Ability to move and manipulate objects with the mind.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Telepathy:</Title>
              <p className='text-gray-700 '>
                {' '}
                Communication, control and perception of other's thoughts and
                emotions through the mind.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Thermokinesis:</Title>
              <p className='text-gray-700 '>
                {' '}
                Control or manipulation of temperature and heat.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Throw:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in accurately throwing objects, including weapons or
                improvised projectiles.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Tracking:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in following and identifying the trail of creatures or
                individuals.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Underwater:</Title>
              <p className='text-gray-700 '>
                {' '}
                Proficiency in activities and combat situations that occur
                underwater.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Wall Crawling:</Title>
              <p className='text-gray-700 '>
                {' '}
                Ability to cling to and crawl on vertical surfaces, like walls.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Water Piloting:</Title>
              <p className='text-gray-700 '>
                {' '}
                Skill in operating and controlling watercraft.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Weather Control:</Title>
              <p className='text-gray-700 '>
                {' '}
                Influence and manipulation of weather patterns and conditions.
              </p>
            </div>

            <div className='flex flex-col   items-center w-full p-5'>
              <Title className='self-start'>Willpower:</Title>
              <p className='text-gray-700 '>
                {' '}
                Strength of mind and determination to resist external influences or
                control.
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Skills}
            alt='X-Men'
          />
        </div>
      </Section>

      <Section>
        <Paragraph>Stats and Skills are used in game with checks.</Paragraph>

        <Paragraph>
          A "check" in an RPG refers to a roll of dice (usually a specific type,
          such as a d20 or a percentile die) to determine the outcome of a
          character's attempted action. The result of the check is compared to a
          target number or difficulty class (DC) set by the One Above All (OAA) to
          determine success or failure. Checks are commonly used for various
          actions, including skill checks, ability checks, and other tasks where
          chance plays a role. For example, a player might make a Lockpickinh
          check to pick a lock or a Charisma check to persuade an NPC.
        </Paragraph>
        <Paragraph>
          A "saving throw" (often abbreviated as "save") is a specific type of
          check made by a character to resist or mitigate the effects of harmful
          effects, traps, or other adverse situations. It represents the
          character's ability to avoid, endure, or shake off the negative
          consequences of an external force. Saving throws are typically
          associated with specific abilities or attributes, such as a Wisdom
          saving throw against telepathic control or an Agility saving throw to
          dodge an area-effect attack. The difficulty class for a saving throw
          is set by the OAA based on the challenge's level or the attack's throw.
        </Paragraph>
      </Section>

      <Section>
        <BigTitle>Abilities</BigTitle>
        <Paragraph>
          Abilities refer to the unique powers, traits, or special skills that
          define what a character can do beyond normal limits. They represent
          the exceptional qualities that make each hero or villain distinct in
          gameplay, ranging from physical enhancements and combat maneuvers to
          mental disciplines and supernatural effects. Each Ability has a
          specific function and mechanical purpose within the game, often granting
          bonuses, resistances, or special actions that can be used in and out of combat.
        </Paragraph>

        <Paragraph>
          Some abilities are innate, granted by a character’s origin or physiology,
          while others are learned, developed, or acquired through external means.
          Abilities may also include passive effects that are always active, or
          active ones that require certain conditions, resources, or actions to
          trigger. Every Ability is defined by its description, the bonuses it
          provides, and any limitations or cooldowns that regulate its use,
          ensuring fair and consistent gameplay across all characters.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Powers}
            alt='Abilities'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Weaknesses</BigTitle>
        <Paragraph>
          Weaknesses represent the flaws, limitations, or vulnerabilities that balance a character’s strengths
          and make them more realistic within the game world. They define the conditions, substances, or situations
          that can hinder a character’s performance, reduce their effectiveness, or put them at risk. Weaknesses
          help maintain balance in gameplay by introducing challenges that players must account for when using
          their abilities or making strategic decisions.
        </Paragraph>

        <Paragraph>
          Each Weakness has its own mechanical effect, ranging from status penalties and reduced stats to
          environmental or psychological drawbacks. Some weaknesses are constant, always affecting the
          character under specific conditions, while others are triggered by certain events, substances,
          or failures. Weaknesses can also reflect aspects of personality, mental instability, or moral
          struggles, depending on the character’s story or powers.
        </Paragraph>

        <Paragraph>
          Ultimately, Weaknesses ensure that every character, no matter how powerful, faces consequences
          and limitations that shape their development, promote creativity in play, and maintain fairness
          within the role-playing system.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Weakness}
            alt='Weakness'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Powers</BigTitle>
        <Paragraph>
          Powers refer to the unique combar abilities or skills that the character
          possesses. These are special moves that are tied to the character's identity,
          and they provide a unique combat playstyle to each one of the heroes and villains
          in the game.
          You can learn more about how to use your powers in the <HashLink className='text-primary' smooth to='/combat/#powers' > Combat Section </HashLink>
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Abilities}
            alt='Powers'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Bio</BigTitle>
        <Paragraph>
          "Bio" or "biography" refers to a narrative or description of the
          character's background, history, and personal details. It provides
          context for the character's actions, motivations, and the events that
          shaped them. The biography is a storytelling element that helps
          players understand and role-play their characters more effectively.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 '
            src={Bio}
            alt='Bio'
          />
        </div>
      </Section>

      <Section>
        <Paragraph>
          To see how to take advantage of your character's attributes in the
          game, check out the{' '}
          <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/roleplaying'
          >
            Roleplaying
          </Link>{' '}
          and{' '}
          <Link
            onClick={scrollToTop}
            className='text-primary'
            to='/combat'
          >
            Combat
          </Link>{' '}
          sections.
        </Paragraph>
      </Section>

      <Section>
        <BigTitle>Character Sheet</BigTitle>
        <Paragraph>
          A character sheet is a document or form used in role-playing games
          (RPGs) to record and track the details, attributes, abilities, and
          progress of a player's in-game persona, also known as their character.
          Character sheets are an essential tool for both players and One Abova Alls
          (OAAs) to maintain consistency and keep track of the game's
          mechanics.
        </Paragraph>
        <Paragraph>Check out the Marvel Character Sheet model below!</Paragraph>
        <iframe
          className='w-full h-[90vh]'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={documentPath}
        ></iframe>
      </Section>
    </div >
  )
}

export default Player
