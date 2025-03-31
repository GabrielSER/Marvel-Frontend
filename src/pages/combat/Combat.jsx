import clsx from 'clsx'
import NormalAttack from '../../assets/images/combat/normalAttack.PNG'
import Venom from '../../assets/images/combat/Venom.png'
import Ranged from '../../assets/images/combat/hawkeye.jpg'
import Combo from '../../assets/images/combat/combat.jpg'
import Dodge from '../../assets/images/combat/dodge.jpg'
import Oportunity from '../../assets/images/combat/oportunity.jpg'
import Dash from '../../assets/images/combat/dash.jpg'
import Help from '../../assets/images/combat/help.jpg'
import Psychic from '../../assets/images/combat/psychic.jpg'
import Critical from '../../assets/images/combat/Critical.PNG'
import CombatImage from '../../assets/images/combat/conbat.png'
import Failure from '../../assets/images/combat/Failure.PNG'
import Elektra from '../../assets/images/combat/elektradeath.jpg'
import Gwen from '../../assets/images/combat/spiderfailure.png'
import PowersDesc from '../../assets/images/combat/Powers.PNG'
import PowerExample from '../../assets/images/combat/PowerExample.PNG'
import PowerLevel from '../../assets/images/combat/powerLevel.PNG'
import Skilllvl from '../../assets/images/combat/Levelup.PNG'
import Powerlvl from '../../assets/images/combat/powerlevelskill.PNG'
import Skilvl from '../../assets/images/combat/skillskill.PNG'
import Content from '../ui/Content'
import { DiceType } from '../content/dice/Dice'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ComicPanel from '../ui/ComicPanel'
import LazyImage2 from '../ui/LazyImage2'

const BigTitle = (props) => (
  <div className='flex flex-col items-center'>
    <div className='flex flex-row w-auto'>
      <ComicTitlePanel>
        <h1
          className='text-2xl sm:text-4xl font-semibold text-center'
          {...props}
        />
      </ComicTitlePanel>
    </div>
  </div>
)

const Title = (props) => (
  <ComicTitlePanel className='bg-comic-secondary self-center'>
    <h2
      className='text-lg font-semibold text-center'
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

const Combat = () => {
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
            <h1 className='text-3xl sm:text-5xl font-semibold mt-4 text-center'>
              COMBAT SYSTEM
            </h1>
          </ComicTitlePanel>
        </div>
        <ComicPanel className='p-10 bg-comic-primary-light'>
          <div className='flex flex-wrap w-full justify-center items-center gap-4'>
            {Object.values(DiceType).map((type, index) => (
              <Content
                key={index}
                id='roll'
                params={{ type }}
              />
            ))}
          </div>
        </ComicPanel>
        <BigTitle>Actions in Battle</BigTitle>
        <Section>
          <Paragraph>
            When in combat a character can attempt different types of actions during his turn. Speciffically,
            a character can attempt one of the following:
          </Paragraph>
          <Section>
            <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Normal Action</Title>
                <Paragraph>
                  A normal action is any kind of action that is not a combat action.
                  For example, A normal action is any standard action a character can take during their turn. It can include interacting with objects, using abilities, or performing tasks that require focus. Examples include: Searching a room for clues, Using an item or Performing a skill check (e.g., unlocking a door)
                </Paragraph>
              </div>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Combat Action</Title>
                <Paragraph>
                  A combat action is an offensive or defensive action used in battle. This include normal attacks, most of the powers, using weapons and the different actions explained in the combat actions section of this page.
                </Paragraph>
              </div>
            </div>
          </Section>

          <Section>
            <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Bonus Action</Title>
                <Paragraph>
                  A bonus action is a quick additional action that a character can take on their turn, usually granted by abilities, skills or certain powers.
                </Paragraph>
              </div>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Free Action</Title>
                <Paragraph>
                  A free action is a minor action that does not require much effort and can be done alongside other actions. Free actions include: Speaking or shouting, dropping an item or making a quick gesture (e.g., signaling a teammate).
                </Paragraph>
              </div>
            </div>
          </Section>

          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>

            <Title>Movement</Title>
            <Paragraph>
              A character can move a certain distance during their turn, based on their speed. Movement can be used to: Approach or escape from enemies, take cover behind objects or maneuver around obstacles
            </Paragraph>


          </div>

        </Section>

        <div className='flex justify-center'>
          <LazyImage2
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={CombatImage}
            alt='Heroes Battle'
          />
        </div>

      </Section>

      <Section>
        <BigTitle>Combat Actions</BigTitle>
        <Title>Normal Attacks</Title>
        <Paragraph>
          When in combat a character can do a normal attack. For attempting a
          normal attack, the attacker throws 1d20. Normal attacks made at short
          range have a check bonus of Melee for hand-to-hand combat. The damage
          of this normal attack is always physical and depends on the strength
          stat.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full sm:max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={NormalAttack}
            alt='Normal Attacks'
          />
        </div>
        <Section>
          <Paragraph>
            Normal attacks made with close range weapons have a check bonus of
            Melee Weapons. The damage of these attacks depends on the specific
            weapon (Check the melee weapons section under objects for more
            information). After throwing the d20 dice, the victim can decide if
            they want to evade or block the attack.
          </Paragraph>
          <Paragraph>When the victim is Blocking:</Paragraph>
          <Paragraph>
            <span className='font-bold text-primary'>a.</span> If the attacker
            gets less than the victim’s defense, the attacker fails the attack,
            and the victim can attempt a counterattack. which is a normal attack
            that can be attempted just after a close range failed attack. It
            works just like a normal attack but deals half its damage. However,
            a counterattack against another counterattack cannot be attempted.
            You can’t also attempt a combo out of a counterattack.
          </Paragraph>
          <Paragraph>
            <span className='font-bold text-primary'>b.</span> If the attacker
            gets more than the defense of the victim, the attack is successful
            and can be continued by a combo.
          </Paragraph>
        </Section>

        <Paragraph>
          When the victim is Evading, they must throw an agility save:
        </Paragraph>
        <Paragraph>
          <span className='font-bold text-primary'>a.</span> If the attacker
          gets less than the victim’s agility save, the attacker fails the
          attack, and the victim can attempt a counterattack
        </Paragraph>
        <Paragraph>
          <span className='font-bold text-primary'>b.</span> If the attacker
          gets more than the agility save of the victim, the attack is
          successful and can be continued by a combo.
        </Paragraph>
      </Section>

      <Section>
        <Title>Ranged Combat</Title>
        <Paragraph>
          Ranged attacks are made at long distance, which means that the
          objective is out of the close combat range of the attacker. These
          attacks can be done with powers, weapons or even throwing certain
          objects. After the attacker throws the d20 dice, the defender can
          attempt an agility throw to evade the incoming projectile. If his
          agility throw is higher than the attacker’s throw (+the respective
          bonus) the projectile fails.
        </Paragraph>
        <Paragraph>
          The victim can also attempt to block the projectile. If the attacker's
          throw is lower than the victim's defense, the attack fails.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Ranged}
            alt='Hawkeye'
          />
        </div>
      </Section>

      <Section>
        <Title>Combos</Title>
        <Paragraph className='pb-10'>
          When a character deals a normal attack successfully, they can attempt
          a combo. Each three levels a character gets one more attack for his
          combo, meaning every character unlocks their first extra attack at
          level 3. The maximum number of attacks of a combo are equal to the
          melee stat of a character. For example, Spider-Man has 4 melee, so he
          can attack up to 4 times, which includes the first successful attack.
          However, each combo attack will have 1 point less in its attack
          modifier. For the second attack of the combo, Spider-Man will only
          have 3 points in its melee bonus modifier. Then he can attempt a third
          attack, which will now have 1 melee bonus modifier. If Spider-Man
          attempts a fourth attack, it will now have no bonus in its melee
          throw, which will make this last hit of the combo harder to achieve.
          Once any of the melee throws fail, the combo is stopped.
          However, if every attack of a combo is successful, the victim will
          have 5 ft knockback and will have 30% chance of falling prone to
          opportunity attacks.
        </Paragraph>
        <Title>Knockback</Title>
        <Paragraph>
          When a character deals a normal attack successfully, they can attempt
          to generate knockback on their opponent. This can only be attempted if
          the attacker's Strength is higher that the victim's and the attacker's
          throw surpasses the victim's defense or agility in more then 3 points.
          If this conditions are met, the victim will be thrown 30 ft away.
          However, a combo cannot be attempted.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Combo}
            alt='Fighting'
          />
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Dodge</Title>
            <Paragraph>
              You can use a Combat Action to put yourself in dodge, which means
              that, for the next round, any attack attempted against you is
              thrown in disadvantage.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Guard</Title>
            <Paragraph>
              You can use a Combat Action to stand on an attack position, which
              will allow you to use a normal attack once any enemy enters your
              close combat area.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Dodge}
              alt='Fighting'
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Disengage</Title>
            <Paragraph>
              You can use a Combat Action to disengage, allowing you to move far
              from an enemy, without provoking opportunity attacks.
            </Paragraph>
          </div>
          <div className='max-w-xl p-2 mx-auto items-center'>
            <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
              <Title className>Opportunity Attacks</Title>
            </div>
            <Paragraph>
              Any character prone or that moves out of an enemy's reach without taking the desingage action is vulnerable to an opportunity attack, which is a normal attack threw in advantage.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Oportunity}
              alt='Oportunity Attack'
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Revive</Title>
            <Paragraph>
              Every character with first aid or medicine can use their action to
              revive another character, which will give the fallen character
              advantage when making their saving throws. The medic must stay
              concentrated when reviving another character.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Dash</Title>
            <Paragraph>
              You can use a Combat Action to run at twice your speed. Speedsters
              can use this as a bonus action once per battle.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Dash}
              alt='Dash'
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Help</Title>
            <Paragraph>
              Every character with first aid or medicine can use their action to
              revive another character, which will give the fallen character
              advantage when making their saving throws. The medic must stay
              concentrated when reviving another character.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Radial attacks</Title>
            <Paragraph>
              When a character throws a radial attack, every enemy caught within
              the radius must make an agility throw. If the victim’s throw is
              higher than the attacker’s throw, the power fails.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Help}
              alt='Help'
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Telekinetic attacks</Title>
            <Paragraph>
              Telekinetic attacks are usually done with powers. After the
              attacker throws the d20 dice, the defender can attempt an agility
              throw to evade being caught by telekinesis. If their agility throw
              is higher than the attacker’s throw (+the respective bonus) the
              power fails.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Psychic attacks</Title>
            <Paragraph>
              Psychic attacks are usually done with powers. After the attacker
              throws the d20 dice, the defender can attempt a wisdom throw to
              evade being damaged or charmed by the psychic attack. If their
              wisdom throw is higher than the attacker’s throw (+psychic or
              wisdom bonus) the power fails.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Psychic}
              alt='Psychic Attacks'
            />
          </div>
        </div>
      </Section>

      <div className='flex flex-col'>
        <Section>
          <div className='flex-col mb-4'>
            <div className='align-center'>
              <BigTitle>Damage types</BigTitle>
            </div>
            <div className='flex flex-row sm:gap-40 gap-6 sm:p-4 justify-center'>
              <div className='flex sm:flex-row flex-col sm:gap-40 gap-4'>
                <div className='flex flex-col'>
                  <Title>Contact</Title>
                  <p className='text-gray-700 text-center'>Bludgeoning</p>
                  <p className='text-gray-700 text-center'>Piercing</p>
                  <p className='text-gray-700 text-center'>Slashing</p>
                  <p className='text-gray-700 mb-6 text-center'>Physical</p>
                </div>
                <div className='flex flex-col'>
                  <Title>Energetic</Title>
                  <p className='text-gray-700 text-center'>Cold</p>
                  <p className='text-gray-700 text-center'>Electric</p>
                  <p className='text-gray-700 text-center'>Energy</p>
                  <p className='text-gray-700 text-center'>Fire</p>
                  <p className='text-gray-700 text-center'>Water</p>
                  <p className='text-gray-700 text-center'>Sonic</p>
                  <p className='text-gray-700 text-center'>Radioactive</p>
                </div>
              </div>
              <div className='flex sm:flex-row flex-col sm:gap-40 gap-0'>
                <div className='flex flex-col'>
                  <Title>Abstract</Title>
                  <p className='text-gray-700 text-center'>Magic</p>
                  <p className='text-gray-700 text-center'>Necrotic</p>
                  <p className='text-gray-700 text-center'>Psychic</p>
                  <p className='text-gray-700 text-center'>Holly</p>
                  <p className='text-gray-700 mb-6 text-center'>Demonic</p>
                </div>

                <div className='flex flex-col'>
                  <Title>After Effect</Title>
                  <p className='text-gray-700 text-center'>Potion</p>
                  <p className='text-gray-700 text-center'>Acid</p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300'></div>
            </div>
          </div>
          <div className='p-2 mx-auto items-center '>
            <div className='flex justify-center'>
              {' '}
              {/* Added a flex container for centering */}
              <LazyImage2
                className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
                src={Venom}
                alt='Venom'
              />
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className='max-w-full sm:px-10 mx-auto items-center'>
          <BigTitle>Critical Hit</BigTitle>
          <Paragraph>
            If a character or creature gets a natural 20 when throwing the check
            for attacking another character or creature it deals a critical hit.
            A critical hit always deals double damage. After the critical hit,
            the attacker will throw 1d100, and according to the result, the
            victim will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-5xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Critical}
              alt='Critical Table'
            />
          </div>
        </div>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Elektra}
              alt="Elektra's Death"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='max-w-full sm:px-10 mx-auto items-center'>
          <BigTitle>Failure</BigTitle>
          <Paragraph>
            If a character gets 1 in their 1d20 check for any action, not only
            the action fails, but it produces a negative effect on the character
            which will be determined by the GM according to the circumstances.
            However, if this action is attempted during combat against an enemy,
            the character who failed the action will throw 1d100, and according
            to the result, they will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Failure}
              alt='Failure'
            />
          </div>
        </div>

        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full xl:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Gwen}
              alt="Spider-Man's Failure"
            />
          </div>
        </div>
      </Section>

      <div className='sm:px-10 mx-auto items-center max-w-full'>
        <BigTitle>Powers</BigTitle>
        <Paragraph className='py-4'>
          Powers are special abilities that are unique to each character. For
          using these powers, you must spend points from your power meter. When
          a battle starts, you can increase your power meter in 1d4. Every long
          rest, your power meter fully recharges. Powers are classified
          according to a level: LV1 powers, LV2 powers, LV3 powers, LV4 powers,
          special powers, and Ultimate powers.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full sm:max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={PowersDesc}
            alt='Powers desc'
          />
        </div>
        <Paragraph>
          Powers can also vary in Psychic, Melee, Magic, or Energy. This
          indicates the damage bonus. All damage done by psychic attacks will
          have + Wisdom damage. However, some Psychic powers don’t do any
          damage. All damage done by melee attacks will have + Strength damage
          (not to be confused with the melee stat). All damage done by energy
          attacks will have + Energy Projection damage. All damage done by Magic
          attacks will have + magic damage. There are also Unique powers which
          bonus is determined on the power’s description. Support powers don’t
          do any damage but have special effects that will aid in battle.
          Psychic, Melee, Energy, Magic, Unique and Support powers have a P, M,
          E, MG, U and S marked before the name of the power, respectively.
        </Paragraph>
      </div>

      <div className='px-0 max-w-full'>
        <Paragraph>Here’s an example of a power:</Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full sm:max-w-2xl transition-all duration-300 mb-6'
            src={PowerExample}
            alt='Powers Example'
          />
        </div>
        <p className='text-gray-700 text-left'>
          • The blue color indicates that is a power 1 attack.
        </p>
        <p className='text-gray-700 text-left'>
          • M indicates that it gets a +melee stat bonus damage.
        </p>
        <p className='text-gray-700 text-left'>
          • Web Snare is the name of the power.
        </p>
        <p className='text-gray-700 text-left'>
          • '(Projectile)' Indicates the kind of attack it is. Since it’s a
          projectile, it is followed by '(90ft range)' which indicates the
          projectile's reach.
        </p>
        <p className='text-gray-700 text-left'>
          • 'Accuracy' indicates the skill or stat check required for the attack
          to be successful, Not all powers require checks.
        </p>
        <p className='text-gray-700 text-left'>
          • After that, there’s a description of the power and everything it
          does.
        </p>
      </div>

      <div className='sm:px-10 mx-auto'>
        <Paragraph>
          If you are out of power points, you can only deal normal or weapon
          attacks. When defeating a normal enemy, you can recharge 1 power
          point, and when you defeat a boss, you can recharge 3 power points
          even if it exceeds your base power meter. However, when having a long
          rest, your power meter returns to its default value. Every character
          has a Power Stat, which determines the amount of power points
          available at each level.
        </Paragraph>
        <div className='flex justify-center py-4'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full sm:max-w-xL transition-all duration-300 mb-6'
            src={PowerLevel}
            alt='Powers Levels'
          />
        </div>
      </div>

      <div className='px-10 mx-auto items-center'>
        <BigTitle>Status Effects</BigTitle>
        <p className='text-gray-700 mb-2 text-center py-4'>
          A character can be affected by many different kinds of status effects
          during combat. This is a list of different statuses and their
          descriptions:
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

      <div className='flex flex-col gap-8 max-w-full'>
        <BigTitle>Level Up</BigTitle>

        <div className='flex xl:flex-row flex-col lg:px-0 px-2'>
          <div className='lg:max-w-5xl max-w-full mx-auto items-center align-middle lg:px-24 my-auto px-0'>
            <Paragraph>
              Every battle gives experience to all characters in a party. With
              enough experience the whole party can level up. Every time a
              character levels up, it gains 10 hp and wins an specific amount of
              Skill Points that can be spent on unlocking different powers or
              improve stats and skills. On levels 10 and 20 it gains 20 hp. The
              amount of skill points won on each level up can be seen on the
              following table:
            </Paragraph>
            <img
              className='lg:max-w-lg max-w-full mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Skilllvl}
              alt='Skill up points per level'
            />
          </div>
          <div className='lg:max-w-5xl max-w-full p-2 mx-auto items-center align-middle lg:px-24 px-0'>
            <Paragraph>
              Powers can be unlocked using skill points once you have the level
              required for unlocking that given power. The skill point cost for
              unlocking powers can be seen in this table:
            </Paragraph>
            <img
              className='lg:max-w-md max-w-full mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Powerlvl}
              alt='Power skill points per level'
            />
            <Paragraph>
              Skills can also be improved using the skill points. The following
              table shows how many skill points does it cost to increase your
              skill to a certain level:
            </Paragraph>
            <img
              className='lg:max-w-sm max-w-full mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Skilvl}
              alt='Skill cost per level'
            />
            <Paragraph>
              Increasing negative stats or skills have the same cost that their
              positive counterparts
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Combat
