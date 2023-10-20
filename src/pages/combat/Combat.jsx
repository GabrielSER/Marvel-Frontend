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
import Skilllvl from '../../assets/images/combat/Levelup.PNG'
import Powerlvl from '../../assets/images/combat/powerlevelskill.PNG'
import Skilvl from '../../assets/images/combat/skillskill.PNG'
import ContentView from '../ui/ContentView'
import Content from '../ui/Content'
import { DiceType } from '../content/dice/Dice'
import ContentScope from '../ui/ContentScope'

const BigTitle = (props) =>
  <h1
    className='text-4xl font-semibold text-center'
    {...props}
  />

const Title = (props) =>
  <h2
    className='text-lg font-semibold text-center'
    {...props}
  />

const Paragraph = (props) =>
  <div
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
        'relative',
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
      </Section>
      
      <div className='flex flex-wrap w-full justify-center items-center gap-4'>
        {
          Object.values(DiceType).map((type, index) =>
            <Content
              key={index}
              id='roll'
              params={{ type }}
            />
          )
        }
      </div>
      <Section>
        <Title>Attacking and defending</Title>
        <ContentScope>
        <Paragraph>
          {`No, he is ::view:{"text":"Burned","id":"burned"}:: ::roll:{"type":"d20"}::`}
        </Paragraph>
      </ContentScope>
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Disengage</Title>
          <Paragraph>
            You can use a normal action to disengage, allowing you to move far from an enemy, without provoking opportunity attacks.
          </Paragraph>
        </div>
        <div className='max-w-xl p-2 mx-auto items-center'>
          <Title>Opportunity Attacks</Title>
          <Paragraph>
            When a character is not detected by another character they want to attack, they can attempt an opportunity attack, which means they will have advantage when throwing the dice. Opportunity attacks can also be done against <ContentView
              className='text-primary underline {key:param,param}'
              text='prone'
              id='prone'
              bottom
            /> characters.
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
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

      <div className='flex lg:flex-row flex-col lg:px-0 px-2 gap-10'>
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
          <BigTitle>Critical Hit</BigTitle>
          <Paragraph>
            If a character or creature gets a natural 20 when throwing the check for attacking another character or creature it deals a critical hit. A critical hit always deals double damage. After the critical hit, the attacker will throw 1d100, and according to the result, the victim will have one of different effects:
          </Paragraph>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
              src={Critical}
              alt='Critical Table'
            />
          </div>
        </div>
        <div className='max-w-5xl p-2 mx-auto items-center'>
          <div className='flex justify-center'> {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
              src={Elektra}
              alt="Elektra's Death"
            />
          </div>
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

export default Combat