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
import Failure from '../../assets/images/combat/Failure.PNG'
import Elektra from '../../assets/images/combat/elektradeath.jpg'
import Gwen from '../../assets/images/combat/spiderfailure.png'
import PowersDesc from '../../assets/images/combat/Powers.PNG'
import PowerExample from '../../assets/images/combat/PowerExample.PNG'
import PowerLevel from '../../assets/images/combat/powerLevel.PNG'
import Bleeding from '../../assets/images/combat/bleeding.png'
import Blinded from '../../assets/images/combat/blinded.jpg'
import Charmed from '../../assets/images/combat/charmed.jpg'
import Comatose from '../../assets/images/combat/comatose.jpg'
import Confused from '../../assets/images/combat/confused.jpg'
import Concentrated from '../../assets/images/combat/concentrated.jpg'
import Deafened from '../../assets/images/combat/deafened.png'
import Drugged from '../../assets/images/combat/drugged.jpg'
import Drunk from '../../assets/images/combat/drunk.jpg'
import Frightened from '../../assets/images/combat/frightened.jpg'
import Frozen from '../../assets/images/combat/frozen.jpg'
import Irradiated from '../../assets/images/combat/irradiated.jpg'
import Grappled from '../../assets/images/combat/grappled.jpg'
import Fallen from '../../assets/images/combat/fallen.jpg'
import Invisible from '../../assets/images/combat/invisible.jpg'
import Paralyzed from '../../assets/images/combat/Paralyzed.jpg'
import Petrified from '../../assets/images/combat/petrified.jpg'
import Possessed from '../../assets/images/combat/possessed.jpg'
import Poisoned from '../../assets/images/combat/poisoned.jpg'
import Purple from '../../assets/images/combat/purple.jpg'
import Sleeping from '../../assets/images/combat/sleeping.jpg'
import Soaked from '../../assets/images/combat/soaked.png'
import Stunned from '../../assets/images/combat/stunned.jpg'
import Telepath from '../../assets/images/combat/telepath.jpg'
import Skilllvl from '../../assets/images/combat/Levelup.PNG'
import Powerlvl from '../../assets/images/combat/powerlevelskill.PNG'
import Skilvl from '../../assets/images/combat/skillskill.PNG'
import ContentView from '../ui/ContentView'
import Content from '../ui/Content'
import { DiceType } from '../content/dice/Dice'

const BigTitle = (props) =>
  <h1
    className='text-3xl font-semibold text-center'
    {...props}
  />

const Title = (props) =>
  <h2
    className='text-xl font-semibold text-center'
    {...props}
  />

const Paragraph = (props) =>
  <p
    className='text-gray-700 text-justify'
    {...props}
  />

const Section = (props) =>
  <div className='flex flex-col w-full space-y-4'
    {...props}
  />

const Combat = () => {
  return (
    <div
      className={clsx(
        'flex flex-wrap',
        'items-center',
        'justify-center',
        'p-6',
        'min-h-screen space-y-4'
      )}
    >
      <Section>
        <h1
          className='text-5xl font-semibold mt-4 text-center p-8'>
          COMBAT SYSTEM
        </h1>
        <BigTitle>Normal Attacks</BigTitle>
        <div className='flex flex-wrap w-full justify-center items-center gap-4'>
          {
            Object.values(DiceType).map((type, index) => <Content
              key={index}
              id='roll'
              params={{ diceType: type }}
            />
            )
          }
        </div>

        <ContentView
          className='text-primary underline {key:param,param}'
          text='Burned state'
          id='burned'
        />
      </Section>
      <Section>
        <Title>Attacking and defending</Title>
        <Paragraph>
          When in combat a character can do a normal attack. For attempting a normal attack,
          the attacker throws 1d20. Normal attacks made at short range have a check bonus of Melee for hand-to-hand combat.
          The damage of this normal attack is always physical and depends on the strength stat.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={NormalAttack}
            alt='Normal Attacks'
          />
        </div>
        <Paragraph>
          Normal attacks made with close range weapons have a check bonus of Melee Weapons. The damage of these attacks depends on the specific weapon (Check the melee weapons section under objects for more information).
          After throwing the d20 dice, one of two things can happen:
          <Paragraph>
            <span className="font-bold text-primary">a.</span>	If the attacker gets less than the victim’s defense, the attacker fails the attack, and the victim can attempt a counterattack. which is a normal attack that can be attempted just after a close range failed attack. It works just like a normal attack but deals half its damage. However, a counterattack against another counterattack cannot be attempted. You can’t also attempt a combo out of a counterattack.
          </Paragraph>
          <Paragraph>
            <span className="font-bold text-primary">b.</span>	If the attacker gets more than the defense of the defender, the attack is successful and can be continued by a combo.
          </Paragraph>
        </Paragraph>
      </Section>


      <Section>
        <Title>Ranged Combat</Title>
        <Paragraph>
          Ranged attacks are made at long distance, which means that the objective is out of the close combat range of the attacker. These attacks can be done with powers, weapons or even throwing certain objects. After the attacker throws the d20 dice, the defender can attempt an agility throw to evade the incoming projectile. If his agility throw is higher than the attacker’s throw (+the respective bonus) the projectile fails.
        </Paragraph>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Ranged}
            alt='Hawkeye'
          />
        </div>
      </Section>

      <Title>Combos</Title>
      <Paragraph>
        When a character deals a normal attack successfully, they can attempt a combo. Each three levels a character gets one more attack for his combo, meaning every character unlocks their first extra attack at level 3. The maximum number of attacks of a combo are equal to the melee stat of a character. For example, Spider-Man has 4 melee, so he can attack up to 4 times, which includes the first successful attack. However, each combo attack will have 1 point less in its attack modifier. For the second attack of the combo, Spider-Man will only have 3 points in its melee bonus modifier. Then he can attempt a third attack, which will now have 1 melee bonus modifier. If Spider-Man attempts a fourth attack, it will now have no bonus in its melee throw, which will make this last hit of the combo harder to achieve. However, if every attack of a combo is successful, the victim will have 5 ft knockback and will have 30% chance of falling prone to opportunity attacks.
      </Paragraph>
      <div className='flex justify-center'> {/* Added a flex container for centering */}
        <img
          className='lg:max-w-lg max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
          src={Combo}
          alt='Fighting'
        />
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Dodge</Title>
          <Paragraph>
            You can use a normal action to put yourself in dodge, which means that, for the next round, any attack attempted against you is thrown in disadvantage.
          </Paragraph>
        </div>

        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Guard</Title>
          <Paragraph>
            You can use a normal action to stand on an attack position, which will allow you to use a normal attack once any enemy enters your close combat area.
          </Paragraph>
        </div>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Dodge}
            alt='Fighting'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Disengage</Title>
          <Paragraph>
            You can use a normal action to disengage, allowing you to move far from an enemy, without provoking opportunity attacks.
          </Paragraph>
        </div>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Opportunity Attacks</Title>
          <Paragraph>
            When a character is not detected by another character they want to attack, they can attempt an opportunity attack, which means they will have advantage when throwing the dice. Opportunity attacks can also be done against prone characters.
          </Paragraph>
        </div>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Oportunity}
            alt='Oportunity Attack'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Revive</Title>
          <Paragraph>
            Every character with first aid or medicine can use their action to revive another character, which will give the fallen character advantage when making their saving throws. The medic must stay concentrated when reviving another character.
          </Paragraph>
        </div>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Dash</Title>
          <Paragraph>
            You can use a normal action to run at twice your speed. Speedsters can use this as a bonus action once per battle.
          </Paragraph>
        </div>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Dash}
            alt='Dash'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Help</Title>
          <Paragraph>
            You can use a normal action to aid another character when attempting an action. The character you help will gain advantage on the next check they perform, but the helping character must have the skill or ability required for the attempted check.
          </Paragraph>
        </div>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Telekinetic attacks</Title>
          <Paragraph>
            Telekinetic attacks are usually done with powers. After the attacker throws the d20 dice, the defender can attempt an agility throw to evade being caught by telekinesis. If their agility throw is higher than the attacker’s throw (+the respective bonus) the power fails.
          </Paragraph>
        </div>
      </div>

      <div className='max-w-5xl p-2 mx-auto items-center'>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Help}
            alt='Help'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Radial attacks</Title>
          <Paragraph>
            When a character throws a radial attack, every enemy caught within the radius must make an agility throw. If the victim’s throw is higher than the attacker’s throw, the power fails.
          </Paragraph>
        </div>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Psychic attacks</Title>
          <Paragraph>
            Psychic attacks are usually done with powers. After the attacker throws the d20 dice, the defender can attempt a wisdom throw to evade being damaged or charmed by the psychic attack. If their wisdom throw is higher than the attacker’s throw (+psychic or wisdom bonus) the power fails.
          </Paragraph>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex justify-center'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-10'
            src={Psychic}
            alt='Psychic Attacks'
          />
        </div>

        <Section>
          <div className='flex-col items-center mb-4'>
            <BigTitle>Damage types</BigTitle>
            <div className='flex flex-row sm:gap-40 gap-20 p-4 justify-center'>
              <div className='flex sm:flex-row flex-col sm:gap-40 gap-4'>
                <div className='flex flex-col'>
                  <Title>Contact</Title>
                  <p className='text-gray-700 text-center'>
                    Bludgeoning
                  </p>
                  <p className='text-gray-700 text-center'>
                    Piercing
                  </p>
                  <p className='text-gray-700 text-center'>
                    Slashing
                  </p>
                  <p className='text-gray-700 mb-6 text-center'>
                    Physical
                  </p>
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-xl font-semibold text-center'>Energetic</h2>
                  <p className='text-gray-700 text-center'>
                    Cold
                  </p>
                  <p className='text-gray-700 text-center'>
                    Electric
                  </p>
                  <p className='text-gray-700 text-center'>
                    Energy
                  </p>
                  <p className='text-gray-700 text-center'>
                    Fire
                  </p>
                  <p className='text-gray-700 text-center'>
                    Water
                  </p>
                  <p className='text-gray-700 text-center'>
                    Sonic
                  </p>
                  <p className='text-gray-700 text-center'>
                    Radioactive
                  </p>
                </div>
              </div>
              <div className='flex sm:flex-row flex-col sm:gap-40 gap-0'>
                <div className='flex flex-col'>
                  <h2 className='text-xl font-semibold text-center'>Abstract</h2>
                  <p className='text-gray-700 text-center'>
                    Magic
                  </p>
                  <p className='text-gray-700 text-center'>
                    Necrotic
                  </p>
                  <p className='text-gray-700 text-center'>
                    Psychic
                  </p>
                  <p className='text-gray-700 text-center'>
                    Holly
                  </p>
                  <p className='text-gray-700 mb-6 text-center'>
                    Demonic
                  </p>
                </div>

                <div className='flex flex-col'>
                  <h2 className='text-xl font-semibold  text-center'>After Effect</h2>
                  <p className='text-gray-700 text-center'>
                    Potion
                  </p>
                  <p className='text-gray-700 text-center'>
                    Acid
                  </p>
                </div>

              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300'></div>
            </div>
          </div>
          <div className='p-2 mx-auto items-center '>
            <div className='flex justify-center'> {/* Added a flex container for centering */}
              <img
                className='max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
                src={Venom}
                alt='Venom'
              />
            </div>
          </div>

        </Section>
      </div>

      <Section>
        <div className='lg:max-w-5xl max-w-xs p-2 mx-auto items-center'>
          <Title>Critical Hit</Title>
          <Paragraph>
            If a character or creature gets a natural 20 when throwing the check for attacking another character or creature it deals a critical hit. A critical hit always deals double damage. After the critical hit, the attacker will throw 1d100, and according to the result, the victim will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-5xl max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Critical}
              alt='Critical Table'
            />
          </div>
        </div>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Elektra}
              alt="Elektra's Death"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center'>
          <Title>Failure</Title>
          <Paragraph>
            If a character gets 1 in their 1d20 check for any action, not only the action fails, but it produces a negative effect on the character which will be determined by the GM according to the circumstances. However, if this action is attempted during combat against an enemy, the character who failed the action will throw 1d100, and according to the result, they will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-5xl max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Failure}
              alt='Failure'
            />
          </div>
        </div>

        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Gwen}
              alt="Spider-Man's Failure"
            />
          </div>
        </div>
      </Section>


      <div className='max-w-5xl p-2 mx-auto items-center'>
        <Title>Powers</Title>
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
        <Title>Status Effects</Title>
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Drugged</Title>
          <Paragraph>
            A drugged character obtains one or more effects depending on the drug received. In addition, the player must make a Durability save to determine if the character becomes addicted.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Drugged}
            alt='Drugged Harry Osbron'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Drunk}
            alt='Drunk Iron Man'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Drunk</Title>
          <Paragraph>
            When consuming a high number of alcoholic drinks, a character gets drunk, so its intelligence gets reduced in 2 points, and its wisdom and perception gets reduced to 1. A character will stay drunk until it rests. However, after resting, it will have a hangover which will reduce its defense and perception in 2 points.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Frightened</Title>
          <Paragraph>
            When frightened, a character will try to run away from the enemy that caused this status. All attacks against this enemy will be thrown in disadvantage, and if failed, the character will run 30 ft away from the causer of this status. A frightened character has 20% chance of getting stunned because of fear every turn this status lasts. If the duration is not specified, frightening lasts for 3 turns.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Frightened}
            alt='Frightened Ms. Marvel'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Frozen}
            alt='Frozen Captain America'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Frozen</Title>
          <Paragraph>
            While frozen, a character can’t attempt any action, and its Speed is 0. Every turn on this status, the character takes 1d8 cold damage. To break free, the player must save to 17 Strength or cast a fire attack. All attacks against this character are thrown in advantage, but they have a 50% chance of letting the frozen character free.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Grappled</Title>
          <Paragraph>
            A grappled character is trapped, and its speed is now 0. All attacks made while in this status are thrown in disadvantage. All attacks against the character are thrown in advantage. To break free, the player must save to 16 Strength.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Grappled}
            alt='Fantastic Grapple'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Irradiated}
            alt='The Incredible Hulk'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Irradiated</Title>
          <Paragraph>
            While in this status, a character gets 1d6 each turn, its perception is reduced to 0 and its defense is reduced in 2 points.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Prone after fall</Title>
          <Paragraph>
            A prone character fell to the ground and all attacks against this character are thrown in advantage. A prone character can only stand up in their turn by using half of their movement speed for that turn. If succeding in an agility check of 18, the fallen character can get up keeping all their movement speed.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Fallen}
            alt='Prone Rogue'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Invisible}
            alt='Invisible Woman'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Invsible</Title>
          <Paragraph>
            An invisible character cannot be seen by any other character. For attempting an attack on an invisible character, the attacker must make a perception check of 15 to get an estimated location. If failed, the attacker won’t be able to attack. If succeeded, this attack will be thrown in disadvantage. Characters with superhuman senses like Daredevil can detect the location of invisible characters, so they can just attack them normally. Other characters with special senses like Spider-Man, can detect an estimated location, but their attacks are still thrown in disadvantage.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Paralyzed</Title>
          <Paragraph>
            A paralyzed character has his speed reduced in half and every turn has a 50% chance of not being able to perform any action. After three turns, the player must save Durability to 15 to remove the effect.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Paralyzed}
            alt='Paralyzed Spider-Man'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Petrified}
            alt='Petrified Avengers'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Petrified</Title>
          <Paragraph>
            While petrified, a character can’t attempt any action, and its Speed is 0. He cannot either see anything. To break free, the player must save to 19 Strength. All attacks against this character are thrown in advantage, but they have a 50% chance of letting the petrified character free. However, there is 5% chance that an attack will break the rock and kill the petrified character. If a character stay petrified for more than 10 turns, it dies.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Possessed</Title>
          <Paragraph>
            A possessed character has the possessor’s consciousness inside his body. The possessor has advantage on any ability check to interact socially with the character and can control its victim to do any kind of action he wants. Each turn, the possessed character must save to 19 Wisdom to free himself.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Possessed}
            alt='Ghost Rider'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Poisoned}
            alt='Omega Red'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Poisoned</Title>
          <Paragraph>
            Each turn, a poisoned character takes damage. The damage dice dealt to a poisoned character increases each turn, starting with 1d4, and the next turn increasing to 1d6, repenting until it gets to 1d20, the next turn another 1d4 gets added and the process repeats. Normal poison can be cured by a durability throw of 14, Bad Poison can be cured by a durability throw of 17, and a mortal poison can only be cured by an antidote or by healing powers. However, durability throws for healing poisoning can only be attempted after 3 turns of poison damage.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Purple Control</Title>
          <Paragraph>
            A character controlled by purple man, when receiving a verbal command from him, will stop doing whatever action they were attempting, and they will try to accomplish whatever was ordered to them by purple man. They will not stop until they achieve what was ordered or until 12 hours pass. A character can be put to sleep for them to stop their current actions, but once they wake up, they will start trying to do again whatever purple man ordered them.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Purple}
            alt='Purple Man'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Sleeping}
            alt='Sleeping'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Sleeping</Title>
          <Paragraph>
            A sleeping induced character will stay asleep util it is awaked by loud sounds, or by being hit. It can also attempt a perception check of 13 to wake up.
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Soaked</Title>
          <Paragraph>
            A soaked character received double damage from cold and electric attacks and half damage by fire attacks. They also have 20% chance of falling prone when dashing.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Soaked}
            alt='Hydro Man'
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='flex justify-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 hidden lg:block'
            src={Stunned}
            alt='Stunned Kingpin'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg mx-auto items-center my-auto  lg:px-24 px-0'>
          <Title>Stunned</Title>
          <Paragraph>
            A character can’t make any kind of action while stunned. The player must save Durability to 14 to remove the effect. Every attack against a stunned character is done in advantage. It lasts a maximum of 3 turns
          </Paragraph>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0'>
          <Title>Telepathically Controlled</Title>
          <Paragraph>
            A character that is being controlled can’t attack the telepath or target the telepath with harmful Abilities or effects. The telepath has advantage on any ability check to interact socially with the character and can control its victim to do any kind of action he wants if it doesn’t involve self-harm. Each turn, the controlled character must save to 18 Intelligence or 15 Wisdom to free himself. If the victim receives more than 12 HP Damage, the controller must save to 18 wisdom to keep controlling its victim.
          </Paragraph>
        </div>
        <div className='flex justify-center items-center px-16'> {/* Added a flex container for centering */}
          <img
            className='lg:max-w-lg max-w-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Telepath}
            alt='Jean Grey'
          />
        </div>
      </div>
      <Title>Level Up</Title>

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 mb-10'>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 my-auto px-0 mb-6'>
          <Paragraph>
            Every battle gives experience to all characters in a party. With enough experience the whole party can level up. Every time a character levels up, it gains 10 hp and wins an specific amount of Skill Points that can be spent on unlocking different powers or improve stats and skills. On levels 10 and 20 it gains 20 hp. The amount of skill points won on each level up can be seen on the following table:
          </Paragraph>
          <img
            className='lg:max-w-lg max-w-lg mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-7'
            src={Skilllvl}
            alt='Skill up points per level'
          />
        </div>
        <div className='lg:max-w-5xl max-w-lg p-2 mx-auto items-center align-middle lg:px-24 px-0'>
          <Paragraph>
            Powers can be unlocked using skill points once you have the level required for unlocking that given power. The skill point cost for unlocking powers can be seen in this table:
          </Paragraph>
          <img
            className='lg:max-w-lg max-w-lg mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
            src={Powerlvl}
            alt='Power skill points per level'
          />
          <Paragraph>
            Skills can also be improved using the skill points. The following table shows how many skill points does it cost to increase your skill to a certain level:
          </Paragraph>
          <img
            className='lg:max-w-lg max-w-lg mx-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
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

export default Combat