import clsx from 'clsx'
import FirstFamily from '../../assets/images/combat/firstfamily.jpg'
import Lifting from '../../assets/images/combat/Lifting.PNG'
import Shehulk from '../../assets/images/combat/she-hulk.png'
import Throw1 from '../../assets/images/combat/throw1.PNG'
import Throw2 from '../../assets/images/combat/throw2.PNG'
import Throw3 from '../../assets/images/combat/colossusthrow.jpg'
import Crush from '../../assets/images/combat/Crush.PNG'
import Destiny from '../../assets/images/combat/MyDestiny.png'
import Crash from '../../assets/images/combat/carcrash.PNG'
import CarCrash from '../../assets/images/combat/crash.PNG'
import HulkJump from '../../assets/images/combat/jumphulk.png'
import Jump from '../../assets/images/combat/jumpstrenght.PNG'
import CapJump from '../../assets/images/combat/captainamericajump.jpg'
import HorizontalJump from '../../assets/images/combat/horizontaljump.PNG'
import AcrobatJump from '../../assets/images/combat/acrobatjump.PNG'
import DaredevilJump from '../../assets/images/combat/daredeviljump.png'
import Breaking from '../../assets/images/combat/breaking.PNG'
import Serpent from '../../assets/images/combat/serpentbreaks.jpg'
import Flying from '../../assets/images/combat/flying.jpg'
import Flytable from '../../assets/images/combat/flytable.PNG'
import Flycombat from '../../assets/images/combat/flycombat.jpg'
import Speedflight from '../../assets/images/combat/speedflight.PNG'
import Ironfly from '../../assets/images/combat/ironfly.jpg'
import Xmen from '../../assets/images/combat/xmen.jpg'
import Popular from '../../assets/images/combat/popular.jpg'
import MoonKnight from '../../assets/images/combat/moonknight.jpg'
import GreenGoblin from '../../assets/images/combat/greengoblin.jpg'
import Identity from '../../assets/images/combat/identity.jpg'


const Roleplay = () => {
  return (



    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-5xl font-semibold mt-4 text-center p-4">ROLEPLAYING ACTIONS</h1>
        <p className="text-gray-700 mb-6 text-center mx-auto lg:px-0 px-10">
          When roleplaying, characters can perform many kinds of actions. In this game, actions are divided in three categories. Common Actions, Special Actions and Custom Actions. Common actions are actions that can be performed by normal humans. For example, every character can lie. Some characters are better lying than others, but every character can attempt that action. Every character can also attempt to fire a gun, though some characters find it harder, but every character can attempt to do it. Special Actions are those that, despite in some cases every character can do it, superhuman abilities can create a huge difference when trying to perform said action. For example, Daredevil is not even close to being capable of lifting the same weight as the Hulk can and Hawkeye is not able to Jump as high as Jessica Jones. Custom actions are special cases in which a player comes up with different kinds of actions that cannot be described as common or special actions.
        </p>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center lg:px-0 px-4">
        <h1 className="text-4xl font-semibold mb-4 text-center">Common Actions</h1>
        <p className="text-gray-700 mb-6 text-center">
          A character that wants to perform any kind of action, must perform a 1d20 dice check, the number obtained in the dice will have a bonus according to the skill, stat or attribute required to perform given action. For example, hiding from another character requires the skill ‘stealth’, so the user must throw 1d20 and add the stealth skill value to the dice result. The GM will decide the check required for the action to be successful according to the circumstances, but the most basic successful action requires a result of 10.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={FirstFamily}
            alt="FF"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center lg:px-0 px-10 ">
        <h1 className="text-4xl font-semibold mb-4 text-center">Special Actions</h1>
        <p className="text-gray-700 mb-6 text-center">
          Some actions can be completely different depending on the character you’re playing. This kind of actions will be scaled according to a range, and the capacity of certain character to perform given action will be given by the Stat, Skill or Attribute required for it to be performed. These are some examples of special actions and how do they work:
        </p>
      </div>

      <div className='flex lg:flex-row flex-col'>
        <div className="max-w-5xl p-2 mx-auto items-center px-20">
          <h1 className="text-2xl font-semibold mb-4 text-center">Lifting Objects</h1>
          <p className="text-gray-700 mb-6 text-center">
            Just like other special actions, to lift a specific weight, a character must throw 1d20, with the bonus being the Strength stat. Since some characters are stronger than others, the strength stat indicates how much a character can lift. The Strength stat is measured in a range from 0 to 8. A character can attempt to lift something one scale higher, however, that throw is done in disadvantage. On the other side, a character that attempts to lift a weight that is one scale below will throw his dice with advantage. A character will always succeed lifting a weight that is two scales lower. A character will always fail trying to lift a weight that is two scales higher. This table indicates how much can a character lift according to its strength stat.
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-md max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={Lifting}
              alt="Lift Table"
            />
          </div>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0 py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Shehulk}
            alt="Lift Table"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Throwing Objects</h1>
        <p className="text-gray-700 mb-6 text-center">
          Just like with other special actions, to throw different kinds of objects, a character must throw 1d20. For the character to be able to throw an object, he must be able to lift it. To throw an object to the exact place you want you must get at least a 17 throw in strength or marklgan. If the object weights more than half of what the character is capable of lifting, the strength stat must be used. If not, the marklgan stat can be used. For every point from the player’s throw that is below 17, the object lands 5 ft away from the desired spot, closer to the character. This table indicates the maximum distance a character can throw an object:
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-2xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Throw1}
            alt="Throw Table 1"
          />
        </div>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-2xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Throw2}
            alt="Throw Table 2"
          />
        </div>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-2xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Throw3}
            alt="Colossus and Wolverine"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Crushing Damage</h1>
        <p className="text-gray-700 mb-6 text-center">
          When falling objects crush or fall on a certain character they do an amount of damage according to the weight of the specific object and the Durability stat of the character being damaged. Additionally the damage is increased in 1d4 for each 10 ft of height from which the object has fallen. If the amounf of damage dices is 5 or higher the victim must achieve a durability throw of 15 or it will fall prone. If the amount is higher than 7 dices the victim will always fall prone.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Crush}
            alt="Crushing Damage Table"
          />
        </div>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-4xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Destiny}
            alt="If this be my Destiny!"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Traffic Collisions</h1>
        <p className="text-gray-700 mb-6 text-center">
          When riding a vehicle, if it crashes a person, the victim will receive damage according to the type of vehicle, its speed and the victim’s Durability stat. To avoid being crashed as a pedestrian, you must get an agility check of 12. This table indicates the amount of damage dices that the crash will deal to a victim. However, the dice varies depending on the vehicle: d6 is used for motorcycles, d8 for cars, d10 for busses and trucks, d20 for bigger vehicles.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={CarCrash}
            alt="Crushing Damage Table"
          />
        </div>
        <p className="text-gray-700 mb-6 text-center">
          When driving, to avoid crashing with another vehicle, you must pass a check of 12 on the respective vehicle driving skill. If failed the damage will be calculated adding half of the damage that a crash will do depending on your vehicle and its speed to the amount of damage dealt by the other vehicle according to its type and speed, and then it will get reduced in an amount of dices equal to the durability of your vehicle. This damage will be dealt to both driver and vehicle.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-4xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Crash}
            alt="Car Crash"
          />
        </div>
      </div>


      <div className='flex lg:flex-row flex-col'>
        <div className="max-w-5xl p-2 mx-auto items-center px-20">
          <h1 className="text-2xl font-semibold mb-4 text-center">Jumping</h1>
          <p className="text-gray-700 mb-6 text-center">
            Just like other special actions, to perform a vertical jump, a character must throw 1d20. Since some characters are stronger than others, the strength stat indicates how much a character can jump vertically. The Strength stat is measured in a range from 0 to 8. A character can attempt to jump a height one scale higher, however, that throw is done in disadvantage. On the other side, a character that attempts to jump a height one scale below will throw his dice with advantage. A character will always succeed jumping up a height that is two scales lower and will always fail trying to jump a height that is two scales higher. This table indicates how high a character can jump according to its strength stat.
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-md max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={Jump}
              alt="Vertical Jump Table"
            />
          </div>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0 hidden lg:block py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={HulkJump}
            alt="Hulk Jump"
          />
        </div>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className="flex justify-center lg:pl-28 pl-0 lg:pr-16 pr-0 py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={CapJump}
            alt="Captain America Jumping"
          />
        </div>
        <div className="max-w-5xl p-2 mx-auto items-center px-20 my-auto">
          <p className="text-gray-700 mb-6 text-center">
            Just like with other special actions, to perform a horizontal jump, a character must throw 1d20. Since some characters are stronger than others, the strength stat indicates how much a character can jump horizontally. The Strength stat is measured in a range from 0 to 8. A character can attempt to jump a distance one scale higher, however, that throw is done in disadvantage. On the other side, a character that attempts to jump a distance one scale below will throw his dice with advantage. A character will always succeed jumping a distance that is two scales lower. A character will always fail trying to jump a distance that is two scales higher. This table indicates how long a character can jump according to its strength stat.
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-md max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={HorizontalJump}
              alt="Horizontal Jump Table"
            />
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className="max-w-5xl p-2 mx-auto my-auto items-center px-20">
          <p className="text-gray-700 mb-6 text-center">
            A horizontal jump can also be attempted with acrobatics but to a lower degree. The scaling works the same than with the strength stat. This table indicates how long a character can jump according to its acrobatics skill.
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-md max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={AcrobatJump}
              alt="Acrobatic Jump Table"
            />
          </div>
          <p className="text-gray-700 mb-6 text-center">
            A character can attempt to jump both, vertically and horizontally, he just need one check for both vertical and horizontal movement
          </p>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0 py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={DaredevilJump}
            alt="Hulk Jump"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Breaking or Bending Materials</h1>
        <p className="text-gray-700 mb-6 text-center">
          Just like with other special actions, to break or bend different kinds of materials, a character must throw 1d20. Since some characters are stronger than others, the strength stat indicates what kind of materials a character can break or bend. The Strength stat is measured in a range from 0 to 8. A character can attempt to break an object categorized one scale higher, however, that throw is done in disadvantage. On the other side, a character that attempts to break a material categorized one scale below will throw his dice with advantage. A character will always succeed breaking materials that are two scales lower. A character will always fail trying to break materials that are two scales higher. This table indicates which materials a character can break or bend according to its strength stat:
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Breaking}
            alt="Breaking Table"
          />
        </div>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-4xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Serpent}
            alt="Cap's Shield Broken"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Flying</h1>
        <p className="text-gray-700 mb-6 text-center">
          A character with the flight skill can move in the air. Every character that can fly can attempt to do it without doing any kind of check. However, when flying, if the character is required to do any kind of maneuver, a check determined by the GM may be required. In this case, the flight skill will work as a bonus, just like with common actions. The flight speed is determined by the flight skill. The flight skill is scaled from 1 to 9
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Flying}
            alt="Falcon Flying"
          />
        </div>
      </div>


      <div className='flex lg:flex-row flex-col'>
        <div className="max-w-5xl p-2 mx-auto items-center px-20">
          <h1 className="text-2xl font-semibold mb-4 text-center">Flying in Combat</h1>
          <p className="text-gray-700 mb-6 text-center">
            In battle, a character that can fly can move both vertically and horizontally. Their movement speed while flying is determined by this table:
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-xs max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={Flytable}
              alt="Flying per turns Table"
            />
          </div>
          <p className="text-gray-700 mb-6 text-center">
            If a character gets hit while flying, it must make a Durability check higher to the attackers throw. If failed, the character must throw the same dice used by the attacker to do damage, to determine the distance in ft from which the flying character will fall. If after falling this distance, the flying character doesn’t touch the ground, the character will regain stability and will keep flying. If a flying character falls to the ground, it will receive damage equal to 1d4 multiplied for every 10 ft of height. If the character faints, falls asleep, gets paralyzed or frozen while flying it will fall to the ground, receiving damage as described before. If a flying character gets stunned, it can attempt a Durability throw of 14, to avoid falling. If succeeded, the character will not fall but it will need to use that turn to descend. Every turn that the character is flying, and it's still stunned, this process is repeated until the character lands, falls to the ground, or sets free from the stunning effect.
          </p>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0 py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Flycombat}
            alt="Rogue Flying"
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col'>
        <div className="flex justify-center lg:pl-28 pl-0 lg:pr-16 pr-0 py-10 hidden lg:block "> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Ironfly}
            alt="Iron Man Flying"
          />
        </div>
        <div className="max-w-5xl p-2 mx-auto items-center px-20 my-auto">
          <h1 className="text-2xl font-semibold mb-4 text-center">Speed Flight</h1>
          <p className="text-gray-700 mb-6 text-center">
            A character that can fly can attempt to make a speed flight, to move faster in the air both vertically and horizontally. However, Speed Flight can’t be used in battle. The flying speed will be determined by the flight skill.
          </p>
          <div className="flex justify-center"> {/* Added a flex container for centering */}
            <img
              className="lg:max-w-md max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
              src={Speedflight}
              alt="Speed Flight Table"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Custom Actions</h1>
        <p className="text-gray-700 mb-6 justify-center px-4">
          During a play session, a player can come up with different kind of actions that are not described on the roleplaying actions section or as a power, skill, or ability for a certain character. These are custom actions. On these situations, the GM may or may not allow the player to perform given action, and if the custom action is permitted, he can ask for a certain dice check according to how difficult may it be to perform that specific custom action for the player’s character. If the player’s character is an already existing Marvel character, the GM may consider if that character has performed that custom action before in some media, or how hard would it be for a that character to perform this custom action. If the player’s character is a custom character, the GM may evaluate the character’s powers, stats, skills, and abilities to stablish if the character can perform given custom action and the dice check necessary for that action to be successful, according to how hard may that action be for this custom character. Custom actions can also be performed in battle, and they can also rest power points if the GM considers it would do so.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Xmen}
            alt="X-Men"
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col'>
        <div className="max-w-5xl p-2 mx-auto items-center px-4">
          <h1 className="text-2xl font-semibold mb-4 text-center">Popularity</h1>
          <p className="text-gray-700 mb-6 text-center px-4">
            Every character has an initial amount of popularity points, representing how much the character is known by the public in the entire universe. These initial popularity points are determined by the GM, according to the campaign or the character that is going to be played. For every public action, a character can gain popularity points depending on how much attention that action creates. These points determine how civilians or certain NPCs will interact with the character. The higher these points are, the most possible is that the civilians will recognize your character, the lower these points are, the more indifferent they will become towards given character. It’s very hard to lose popularity points, but if you enter long times of inactivity, it’s possible that the public may start to forget you if your popularity points are below 400. This scale indicates the proportion of the popularity you gain with these points:
          </p>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-left">
              •	0/100: Barely Known
            </p>
            <p className="text-gray-700 text-left">
              •	100/200: lgall Reputation
            </p>
            <p className="text-gray-700 text-left">
              •	200/300: Known by the community (neighborhood or lgall cities)
            </p>
            <p className="text-gray-700 text-left">
              •	300/400: Known on large cities
            </p>
            <p className="text-gray-700 text-left">
              •	400/500: Known in the entire country
            </p>
            <p className="text-gray-700 text-left">
              •	500/600: Known in the entire world
            </p>
            <p className="text-gray-700 text-left">
              •	600/700: Known by the entire system
            </p>
            <p className="text-gray-700 text-left">
              •	700/800: Known by the entire Galaxy
            </p>
            <p className="text-gray-700 text-left">
              •	800/900: Known in the entire universe
            </p>
            <p className="text-gray-700 text-left">
              •	900+: Known in the entire multiverse
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0 py-10"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Popular}
            alt="The (In)famous Iron Man"
          />
        </div>
      </div>


      <div className="max-w-5xl p-2 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Reputation</h1>
        <p className="text-gray-700 mb-6 text-center">
          Every character has an initial amount of Reputation points, representing how good or bad is the opinion of civilians about that character. These initial popularity points are determined by the GM, according to the campaign or character that is going to be played. For every public action, a character can gain or lose Reputation points depending on how the public perceives that action. These points determine how civilians and certain NPCs will interact with the character. The higher these points are, the better response will the civilians show, the lower these points are, the more hostile or afraid they will become towards that character. These points go from a scale from -100 to 100.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={MoonKnight}
            alt="Moon Knight has a bad reputation!"
          />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col mb-4'>
        <div className="max-w-5xl mx-auto my-auto items-center px-20 p-2">
          <h1 className="text-2xl font-semibold mb-4 text-center">Public Image</h1>
          <p className="text-gray-700 mb-6 text-center">
            Sometimes public opinion is not equal to the authorities’ opinion about a certain character, meaning that even if a character is popular among civilians, it can be considered a public menace or vice versa. A character’s public image determines how good or bad is the relationship of a specific characters with the authorities. Every character can be perceived in one of these different categories.
          </p>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-left">
              •	Superhero
            </p>
            <p className="text-gray-700 text-left">
              •	Hero
            </p>
            <p className="text-gray-700 text-left">
              •	Vigilante
            </p>
            <p className="text-gray-700 text-left">
              •	Anti-hero
            </p>
            <p className="text-gray-700 text-left">
              •	Criminal
            </p>
            <p className="text-gray-700 text-left">
              •	Public Enemy
            </p>
            <p className="text-gray-700 text-left">
              •	Military
            </p>
            <p className="text-gray-700 text-left">
              •	Villain
            </p>
            <p className="text-gray-700 text-left">
              •	Supervillain
            </p>
            <p className="text-gray-700 text-left">
              •	Unknown Threat
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:pr-28 pr-0 lg:pl-16 pl-0"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-lg max-w-xs h-max rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={GreenGoblin}
            alt="Super Villain"
          />
        </div>
      </div>

      <div className="max-w-5xl p-2 mb-4 mx-auto items-center">
        <h1 className="text-2xl font-semibold mb-4 text-center">Identity</h1>
        <p className="text-gray-700 mb-6 text-center">
          Some heroes want to keep their hero and their personal life separated, that’s why they chose to hide their government name from the public. You can have four types of identities in the game. Public Identity is when your alter ego is known by the government and the public. An Identity Known by the Authorities (KBA) is when your alter ego is known only by the government but not by the public. A Secret Identity is when your identity is not known by the government or the public. No dual identity is when you don’t have an alter ego.
        </p>
        <div className="flex justify-center"> {/* Added a flex container for centering */}
          <img
            className="lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6"
            src={Identity}
            alt="Spider-Man's Identity"
          />
        </div>
      </div>

    </div >

  )
}

export default Roleplay