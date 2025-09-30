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

const Character = () => {
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
        <div className='flex flex-row self-center max-w-full'>
          <ComicTitlePanel>
            <h1 className='text-3xl sm:text-5xl font-semibold mt-4 text-center'>
              PLAYER'S GUIDE
            </h1>
          </ComicTitlePanel>
        </div>
        <div className='flex flex-row self-center gap-4 max-w-full'>
          <BigTitle>What is a character?</BigTitle>
        </div>
      </Section>

      <Section>
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
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>HP (Hit Points):</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Represents the character's health or life force. HP points are
              lost every time a character recieves damage. Once the HP is down
              to 0 the character falls and is in danger of dying.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Speed:</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Indicates the character's movement capability in battle. It
              represents the amount of distance a character can move in a turn.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Defense:</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Reflects the character's ability to resist attacks. An attack must
              surpass a character's defense to succeed.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Energy Projection:</Title>
            <p className='text-gray-700 text-left'>
              Measures the character's proficiency in projecting energy-based
              attacks.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Strength:</Title>
            <p className='text-gray-700 text-left'>
              Represents the character's physical power.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Intelligence:</Title>
            <p className='text-gray-700 text-left'>
              Reflects the character's mental acuity.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Durability:</Title>
            <p className='text-gray-700 text-left'>
              Indicates the character's resilience to damage.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Agility:</Title>
            <p className='text-gray-700 text-left'>
              Represents the character's speed and dexterity.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Wisdom:</Title>
            <p className='text-gray-700 text-left'>
              Reflects the character's knowledge and intuition.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Power:</Title>
            <p className='text-gray-700 text-left'>
              Represents the amount of power points a character has depending on
              their level.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Combo:</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Represents the amount of times a character can perform a normal attack in a combo.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Perception:</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Reflects the character's awareness and ability to notice details.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Charisma:</Title>
            <p className='text-gray-700 text-left'>
              {' '}
              Indicates the character's charm and persuasiveness.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <Title className='self-start'>Luck:</Title>
            <p className='text-gray-700 text-left'>
              Represents the character's fortune or chance.
            </p>
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

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Acrobatics:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to perform agile and complex movements, often involving
            balance, coordination, and flexibility.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Aerial Piloting:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in operating and controlling aircraft or flying vehicles.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Animal Handling:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to interact with and control animals.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Arcana:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge of magical and mystical forces.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Athletics:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in physical activities such as running, jumping,
            climbing, and other exercises requiring strength and stamina.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Bike Piloting:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in riding and controlling motorcycles or similar
            two-wheeled vehicles.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Body Stretching:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to stretch and manipulate one's body beyond normal
            limits.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Chi Control:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Mastery over one's life energy for various effects.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Cryokinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control or generation of ice and cold.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Deception:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in misleading or concealing the truth, often used in social
            situations.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Electronics Knowledge:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Understanding of electronic systems and devices.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Environmental Awareness:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Heightened sensitivity to the surroundings and changes in the
            environment.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Espionage:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in covert operations and intelligence gathering.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Etiquette:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge of proper social behavior and manners.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Explosives:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in handling and using explosive devices.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Firearms:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in using firearms and other ranged weapons.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>First Aid:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge and ability to provide basic medical assistance.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Flight:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Ability to fly through the air without the need for external
            assistance.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Gravitokinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control over gravitational forces, allowing manipulation of gravity.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Heavy Equipment Piloting:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in operating large and heavy machinery or vehicles.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>History Knowledge:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge of past events and historical facts.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Hydrokinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control or manipulation of water and liquid substances.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Intimidation:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to instill fear or awe in others.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Intuition:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Enhanced perception and understanding beyond logical reasoning.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Investigation:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in examining and analyzing details to solve problems or
            mysteries.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Lockpicking:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to open locks without the use of a key, often involving
            tools or specialized techniques.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Magic:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in casting spells and using magical abilities.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Marksman:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Exceptional skill in using ranged weapons with precision and
            accuracy.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Mechanic:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in repairing and maintaining mechanical devices.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Medicine:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge and skill in medical practices and healing.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Melee:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Represents the character's effectiveness in close combat.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Melee Weapons:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in using close-quarter combat weapons like swords,
            knives, or other handheld weapons.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Motor Vehicle Piloting:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in driving and controlling motorized vehicles.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Natural Sciences Knowledge:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Understanding of scientific principles related to the natural world.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Persuasion:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to convince and influence others effectively.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Pickpocket:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to discreetly steal items from others without being
            noticed.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Power Cosmic:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control over the fundamental forces of the universe.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Pyrokinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control or manipulation of fire and heat.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Ranged Weapons:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in using weapons that can be fired at a distance, such
            as bows, guns, or crossbows.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Radiation:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Tolerance and control over radioactive elements and energy.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Religion:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Knowledge and understanding of religious beliefs, practices, and
            traditions.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Software Knowledge:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Understanding of computer software, programming languages, and
            digital systems.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Spiritual Affinity:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Connection and sensitivity to spiritual and metaphysical energies.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Stealth:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            The ability to move quietly and avoid detection, often used for
            sneaking and surprise attacks.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Survivalist:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in outdoor survival skills, including navigation,
            foraging, and shelter building.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Telekinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Ability to move and manipulate objects with the mind.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Telepathy:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Communication, control and perception of other's thoughts and
            emotions through the mind.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Thermokinesis:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Control or manipulation of temperature and heat.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Throw:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in accurately throwing objects, including weapons or
            improvised projectiles.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Tracking:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in following and identifying the trail of creatures or
            individuals.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Underwater:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Proficiency in activities and combat situations that occur
            underwater.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Wall Crawling:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Ability to cling to and crawl on vertical surfaces, like walls.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Water Piloting:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Skill in operating and controlling watercraft.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Weather Control:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Influence and manipulation of weather patterns and conditions.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
          <Title className='self-start'>Willpower:</Title>
          <p className='text-gray-700 text-left'>
            {' '}
            Strength of mind and determination to resist external influences or
            control.
          </p>
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
          target number or difficulty class (DC) set by the Game Master (GM) to
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
          is set by the GM based on the challenge's level or the attack's throw.
        </Paragraph>
      </Section>

      <Section>
        <BigTitle>Abilities</BigTitle>
        <Paragraph>
          Abilities refer to the unique powers or talents that set a character
          apart. These can include magical spells, superhuman strength, special
          maneuvers, or any other exceptional traits that contribute to the
          character's capabilities. Abilities are often defined with specific
          mechanics and rules to govern their usage within the context of the
          role-playing system.
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
          Weaknesses refer to vulnerabilities or limitations that the character
          possesses. These are aspects that can be exploited by the Game Master
          (GM) or affect the character's abilities in certain situations.
          Weaknesses add depth to the character, creating challenges and
          opportunities for role-playing.
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
          Powers refer to the unique abilities or skills that the character
          possesses. These can include supernatural abilities, combat skills, or
          any other exceptional traits that set the character apart. Powers are
          typically defined with specific mechanics, such as skill checks,
          ranges, and bonus damages, to facilitate gameplay within the
          role-playing system. They contribute to the character's identity and
          capabilities within the game world and mostly during combat.
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
          Character sheets are an essential tool for both players and Game
          Masters (GMs) to maintain consistency and keep track of the game's
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
    </div>
  )
}

export default Character
