import clsx from 'clsx'
import NormalAttack from '../../assets/images/combat/normalAttack.PNG'
import Venom from '../../assets/images/combat/Venom.png'
import Ranged from '../../assets/images/combat/hawkeye.jpg'
import Combo from '../../assets/images/combat/combat.jpg'
import Dodge from '../../assets/images/combat/dodge.jpg'
import Grab from '../../assets/images/combat/grab.jpeg'
import Oportunity from '../../assets/images/combat/oportunity.jpg'
import Dash from '../../assets/images/combat/dash.jpg'
import Help from '../../assets/images/combat/help.jpg'
import Mounted from '../../assets/images/combat/mounted.jpg'
import Psychic from '../../assets/images/combat/psychic.jpg'
import Critical from '../../assets/images/combat/Critical.PNG'
import CombatImage from '../../assets/images/combat/conbat.png'
import Failure from '../../assets/images/combat/Failure.PNG'
import Death from '../../assets/images/combat/death.png'
import elektra2 from '../../assets/images/combat/Elektra-death.avif'
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
        <ComicPanel className='p-10 bg-comic-primary-light md:w-3/4 self-center'>
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
            When in combat a character has an Action, a Bonus Action and a Free Action during his turn, they might also do a reaction once per round, once done he can't do another reaction until a new round of combat starts.
          </Paragraph>
          <Section>
            <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Combat Action</Title>
                <Paragraph>
                  An action is any significant task a character performs on their turn that requires focus and time. In combat, examples include initiating a combo, using a power, firing a weapon, or grappling an opponent. Noncombat actions might involve driving a vehicle, reloading a weapon, or hacking a computer.
                </Paragraph>
              </div>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Bonus Action</Title>
                <Paragraph>
                  An action is any significant task a character performs on their turn that requires focus and time. In combat, examples include initiating a combo, using a power, firing a weapon, or grappling an opponent. Noncombat actions might involve driving a vehicle, reloading a weapon, or hacking a computer.
                </Paragraph>
              </div>
            </div>
          </Section>

          <Section>
            <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Free Action</Title>
                <Paragraph>
                  Free actions are minor tasks that require virtually no effort and can be performed alongside other actions. These include speaking or shouting, dropping an item, or making a quick gesture—such as signaling a teammate.
                </Paragraph>
              </div>
              <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
                <Title>Reaction</Title>
                <Paragraph>
                  A reaction is a special action taken outside of a character's turn in response to a trigger or condition, usually provided by abilities or powers. The most common reactions include counterattacks and opportunity attacks.
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
            and the victim can attempt a counterattack.
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
          a combo. The amount of attacks that comprises a Combo is determined by
          the Combo stat, which includes the first successful attack.
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


        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Counterattack</Title>
            <Paragraph>
              A    A counter attack is a normal attack
              that can be attempted just after a close range failed attack. It
              works just like a normal attack but deals half its damage. However,
              a counterattack against another counterattack cannot be attempted.
              You can’t also attempt a combo out of a counterattack.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Knockback</Title>
            <Paragraph>
              When a character deals a normal attack successfully, instead of a combo they can attempt
              to generate knockback on their opponent. This cannot be attempted if
              the attacker's Strength is 3 points lower that the victim's.
              If this conditions are met, the victim will be thrown 10 ft away.
            </Paragraph>
          </div>
        </div>
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
            <Title>Ready</Title>
            <Paragraph>
              A ready action is a special action that allows you to prepare for a specific event or trigger. You can use your action to ready a response to a specific condition, such as "If an enemy comes within 5 feet of me, I will attack." When the condition is met, you can use your reaction to execute the prepared action.
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
            <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
              <Title className>Grappling</Title>
            </div>
            <Paragraph>
              As an action any character can attempt to grapple another character,
              for this the grappler needs to have one free arm part of their body that would be able to be used for grappling.
              When a grapple gets declared the grappler must do a strength check against the defender agility or strength check (The choice of the defender), if successful the target gets the grapple status and can only attempt to get free at the end of his turns. When grappling the grappler can move up to half his speed dragging the grappled character.  This cannot be attempted if
              the attacker's Strength is 3 points lower that the victim's.
            </Paragraph>

          </div>
          <div className='max-w-xl p-2 mx-auto items-center'>
            <div className='flex flex-col max-w-xl p-2 mx-auto items-center justify-center'>
              <Title className>Opportunity Attacks</Title>
            </div>
            <Paragraph>
              An opportunity attack is posssible when a hostile character that you can see moves out of your reach. You can use your reaction to make a melee attack against the provoking character. If the attack hits, it deals damage.
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
              src={Grab}
              alt='Grappling'
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Ambush Strike</Title>
            <Paragraph>
              When you strike a distracted or vulnerable opponent, you have advantage in your attack throw exploiting their lack of awareness.
            </Paragraph>
          </div>
          <div className='max-w-xl p-2 mx-auto items-center'>
            <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
              <Title>Disengage</Title>
            </div>
            <Paragraph>
              You can use a Combat Action to disengage, allowing you to move far
              from an enemy, without provoking opportunity attacks.
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
              When you take the Help action, you assist another character in completing a task. The character you aid gains advantage on the next ability check it makes to perform the task you are helping with, provided it makes the check before the start of your next turn.

              Alternatively, you can use the Help action to aid an ally in attacking a character within 5 feet of you. If you do so, the first attack roll that ally makes against the target before the start of your next turn is made with advantage.

              You must be able to see the character you are helping, and it must be able to understand or sense your assistance.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Radial attacks</Title>
            <Paragraph>
              When a character performs a radial attack, all other characters within the affected area must make either an Agility or Durability check.

              If a character's Agility check exceeds the attacker’s skill check, they successfully evade the area of effect and take no damage.

              If a character's Durability check exceeds the attacker’s skill check, they withstand the attack, blocking all damage.

              Radial attacks do not involve a dice roll for the attacker's skill check. Instead, the required value is calculated as 10 + the relevant skill modifier.


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
              attacker throws the d20 dice, the defender can attempt an Strength
              throw to evade being caught by telekinesis. If their Strength throw
              is higher than the attacker’s throw (+the respective bonus) the
              power fails.
            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Psychic or Telepathic attacks</Title>
            <Paragraph>
              Psychic or Telepathic attacks are usually done with powers. After the attacker
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

      <Section>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>
            <Title>Mounted Combat</Title>
            <Paragraph>
              While mounted on a willing creature that could normally support the weight of the rider without problem, the following rules apply:
            </Paragraph>
            <Paragraph>
              - They will now share turns in the initiative and move together, if dismounted and the rider already used his action, he will have the next turn on their initiative order of the next turn.

            </Paragraph>
            <Paragraph>
              - The mount dictates the movement, using their speed or flight for that, if the rider dismounts after the movement, his speed for the rest of that turn is halved.
            </Paragraph>
            <Paragraph>
              - When forced to check if the rider gets dismounted by any action or the environment the rider can try an agility or animal handling check (Depending on the mount or whichever is higher) to avoid falling off the mount.

            </Paragraph>
          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center justify-center'>
            <Title>Use Objects</Title>
            <Paragraph>
              While in combat, you can use an object as part of your actions. The type of action (Combat Action, Bonus Action, Free Action, Reaction) will vary depending on the object properties.
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
              src={Mounted}
              alt='Mounted Combat'
            />
          </div>
        </div>
      </Section>

      <Content id='concentrated' />

      <div className='flex flex-col'>
        <Section>
          <div className='flex-col mb-4'>
            <div className='align-center'>
              <BigTitle>Damage types</BigTitle>
            </div>
            <div className='flex flex-row sm:gap-40 gap-6 sm:p-4 justify-center'>
              <div className='flex sm:flex-row flex-col sm:gap-40 gap-4'>
                <div className='flex flex-col'>
                  <Title>Physical</Title>
                  <p className='text-gray-700 text-center'>Bludgeoning</p>
                  <p className='text-gray-700 text-center'>Piercing</p>
                  <p className='text-gray-700 text-center'>Slashing</p>
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
                  <p className='text-gray-700 text-center'>Lightforce</p>
                  <p className='text-gray-700 text-center'>Darkforce</p>
                  <p className='text-gray-700 text-center'>Holy</p>
                  <p className='text-gray-700 mb-6 text-center'>Demonic</p>
                </div>

                <div className='flex flex-col'>
                  <Title>After Effect</Title>
                  <p className='text-gray-700 text-center'>Poison</p>
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
            which will be determined by the OAA according to the circumstances.
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




      <Section>
        <BigTitle id='fall'>Falling in Battle</BigTitle>
        <Paragraph className='pt-2'>
          When a character reaches 0 HP, they must roll a d100.
          Only the player and the One Above All may see the result.
          All the rolls thrown by the fallen character are private between him and the OAA until they stabilize.
        </Paragraph>
        <div className='flex'>
          <div className='sm:px-10'>

            <p className='text-gray-700 text-left'>
              • Heroism cannot be used to add to the roll.
            </p>
            <p className='text-gray-700 text-left'>
              • However, the player may spend 200 Heroism points to reroll the die.
            </p>
          </div>
        </div>
        <Paragraph className=''>
          The d100 result determines the character’s base negative HP value.
          To this value, add any excess damage from the attack that reduced the character to 0 HP.
        </Paragraph>
        <Paragraph className=''>
          <b>Example: </b>
          If the character had 10 HP and received 15 damage, add 5 points of damage to the negative base HP result.
        </Paragraph>
        <Title>
          Survival Checks
        </Title>
        <Paragraph className=''>
          While in a dying state, the character must make a Willpower saving throw at the start of each turn.
        </Paragraph>
        <div className='flex'>
          <div className='sm:px-10'>

            <p className='text-gray-700 text-left'>
              • On a failure (10 or less), the character’s HP is reduced by 1d8 + Durability.
            </p>
            <p className='text-gray-700 text-left'>
              • On a success, the character’s HP increases by 1d8 + Durability.
            </p>
          </div>
        </div>
        <Paragraph className=''>
          The character is no longer dying once their HP rises above 0.
          However, they die permanently if their HP drops below the negative value equal to half of their maximum HP.
        </Paragraph>
        <Paragraph className=''>
          <b>Example: </b>
          If the character’s maximum HP is 120, they die if their HP reaches -60.
        </Paragraph>
        <Title>
          Assistance from Other Characters
        </Title>
        <Paragraph className=''>
          During this process, allies may use healing abilities, First Aid, or Medicine to help the fallen character recover HP.
        </Paragraph>
        <div className='flex'>
          <div className='sm:px-10'>

            <p className='text-gray-700 text-left'>
              • <b>First Aid:</b> A successful check restores 1d8 + First Aid HP.
            </p>
            <p className='text-gray-700 text-left'>
              • <b>Medicine</b> A successful check restores 2d8 + Medicine HP.
            </p>
            <p className='text-gray-700 text-left'>
              • Other healing abilities or powers can be added normally.
            </p>
          </div>
        </div>

        <Title>
          The Death Table
        </Title>
        <Paragraph className=''>
          This table shows the possible effects of the d100 Survival Check:
        </Paragraph>
        <div className='flex'>
          <div className='sm:px-10'>

            <p className='text-gray-700 text-left'>
              • CL = Current Level
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <LazyImage2
            className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Death}
            alt='Death Table'
          />
        </div>

        <Paragraph className=''>
          Since all throws and checks made by the fallen character are private between their player and the OAA.
          Other players can only get to know the status of the fallen character (the result from the death table)
          by performing a succesful Medicine or First Aid Check on the fallen character.
        </Paragraph>

        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <LazyImage2
              className='max-w-full xl:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={elektra2}
              alt="Elektra's Death"
            />
          </div>
        </div>
      </Section>




      <Section>
        <BigTitle id='powers'>Powers</BigTitle>
        <Paragraph className='py-4'>
          Powers are special combat abilities that are unique to each character. For
          using these powers, you must spend points from your power meter. Every long
          rest, your power meter fully recharges. Powers are classified
          according to a level: LV1 powers, LV2 powers, LV3 powers, LV4 powers,
          special powers, and Ultimate powers.
        </Paragraph>
        <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center'>



            <div className='flex justify-center'>
              {' '}
              {/* Added a flex container for centering */}
              <LazyImage2
                className='max-w-full sm:max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
                src={PowersDesc}
                alt='Powers desc'
              />
            </div>

          </div>
          <div className='flex flex-col max-w-xl p-2 mx-auto items-center justify-center'>

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
          </div>
        </div>
      </Section>




      <div className='sm:px-10 mx-auto'>

        <p className='text-gray-700 text-left'>
          • The blue color indicates that is a power 1 attack.
        </p>
        <p className='text-gray-700 text-left'>
          • "Sneak Attack" is the name of the power.
        </p>
        <p className='text-gray-700 text-left'>
          • "Type" indicates the kind of attack it is. In this case, it is a close range attack, but it can also be a range, radial or projectile attack. For these kind of attacks, the type also indicates the range of the attack.
        </p>
        <p className='text-gray-700 text-left'>
          • The "Skill Check" indicates the skill used for the attack to be succesfull.  Not all powers require checks.
        </p>


        <p className='text-gray-700 text-left'>
          • Cast indicates the type of action required for the power to be used. In this case it is an Action, but it could also be used as a Reaction, Bonus Action or Free Action.
        </p>
        <p className='text-gray-700 text-left'>
          • After that, there’s a description of the power that specifies everything it does.
        </p>
      </div>

      <div className='sm:px-10 mx-auto'>
        <Paragraph>
          If you are out of power points, you can only deal normal or weapon
          attacks. When defeating a normal enemy, you can recharge 1 power
          point, and when you defeat a boss, you can recharge 2 power points
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


      <div className='flex flex-col gap-8 max-w-full'>
        <BigTitle>Level Up</BigTitle>

        <div className='flex xl:flex-row flex-col lg:px-0 px-2'>
          <div className='lg:max-w-5xl max-w-full mx-auto items-center align-middle lg:px-24 my-auto px-0'>
            <Paragraph>
              Every battle gives experience to all characters in a party. With
              enough experience the whole party can level up. Every time a
              character levels up, it gains 5 hp and wins an specific amount of
              Skill Points that can be spent on unlocking different powers or
              improve stats and skills. On levels 10 and 20 it gains 10 hp. The
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
              positive counterparts. Additionally, you can only level up a skill up to two times your current level.
            </Paragraph>
          </div>
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

      <Content id='deafened' />

      <Content id='drugged' />

      <Content id='drunk' />

      <Content id='frightened' />

      <Content id='frozen' />

      <Content id='grappled' />

      <Content id='invisible' />

      <Content id='irradiated' />

      <Content id='paralyzed' />

      <Content id='petrified' />

      <Content id='poisoned' />

      <Content id='possessed' />

      <Content id='prone' />

      <Content id='purple' />

      <Content id='sleeping' />

      <Content id='soaked' />

      <Content id='stunned' />

      <Content id='telepath' />
    </div>
  )
}

export default Combat
