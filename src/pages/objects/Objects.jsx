import Add from '../../assets/images/combat/add.PNG'
import Beretta from '../../assets/images/combat/Baretta.PNG'
import Deadpool from '../../assets/images/combat/deadpool.jpg'
import Sniper from '../../assets/images/combat/sniper.jpg'
import Machine from '../../assets/images/combat/machinegun.jpg'
import Dual from '../../assets/images/combat/dualpistol.PNG'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const BigTitle = (props) => (
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
)

const Title = (props) => (
  <div className='flex flex-col items-center'>
    <ComicTitlePanel className='bg-comic-secondary'>
      <h1
        className='text-xl font-semibold text-center'
        {...props}
      />
    </ComicTitlePanel>
  </div>
)

const Objects = () => {
  return (
    <div className='flex flex-col items-center min-h-screen max-w-full py-10'>
      <div className='px-10 py-2 items-center'>
        <BigTitle className='text-5xl font-semibold m-4 text-center'>
          OBJECTS
        </BigTitle>
      </div>

      <div className='px-10 max-w-full items-center'>
        <Title>Firearms</Title>
        <p className='text-gray-700 mb-6 text-left'>
          Projectile Weapons have these attributes:
        </p>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon type (WT):
            </span>{' '}
            sets some common behavior between weapons of the same type.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon range (WR):
            </span>{' '}
            The maximum range in feet of a specific weapon.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon damage factor (WF):
            </span>{' '}
            A portion of damage that is applied proportionally to the final
            damage made by a weapon attack, see Weapon damage/Modifier by
            performance.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon distance penalty (WDP):
            </span>{' '}
            Describes how much the weapon damage is affected depending on the
            distance, for a projectile is the distance from shooter to target.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon Capacity (WC):
            </span>{' '}
            The amount of ammo or charges that the weapon can hold at once.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon Reload (WRE):
            </span>{' '}
            The number of actions required to reload a magazine or return the
            weapon to a loaded state.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon Modifier (WM):
            </span>{' '}
            Weapons require some skill to be used efficiently, for instance a
            pistol will be used with firearms skill. To abbreviate, the skills
            Handguns, Shotguns, Rifles are under the Firearms skill, that means
            that a character with 4 of Firearms skill has 4 of Handguns too, but
            if the Handgun skill is greater that value will be used. This
            modifier will be applied to the hit roll and the final damage.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Modifier by performance:
            </span>{' '}
            The damage delt by a weapon depends on the performance of his user
            in that attack (1d20), in other words: Is not the same to attack the
            same target that has a 12 agility with a roll of 13 than with a 19
            where both attacks are hits. That’s why the final total damage of a
            weapon depends on the roll and is defined in the next table.
          </p>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-6'
              src={Add}
              alt='Add Modifier'
            />
          </div>
          <p className='text-gray-700 text-left mb-6'>
            The Attack to Defense Diference or ADD is calculated based on the
            saving throw used by the victim to protect themselves from the
            attack. The victim may choose to block or to dodge the attack. If
            the victim tries to block, they will throw a durability saving
            throw. It they try to dodge the attack, they must throw an agility
            saving throw. The ADD will be the result of the attacker's Firearms
            or marksman check minus the victim's agility or durability throw.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Static Weapon Damage:
            </span>{' '}
            Any weapon that requires some talent component of his user will have
            a damage output depending on the WF, for example a C4 explosive
            charge will always have the same damage value and it does not depend
            on the user that activated the device, so the WF stat of the weapon
            will be used as a base damage.
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        {' '}
        {/* Added a flex container for centering */}
        <img
          className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
          src={Deadpool}
          alt='Deadpool'
        />
      </div>
      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          Calculating final damage for firearms
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            The final damage of an attack is the sum of the weapon modifier (WM)
            and the modifier obtained with ADD and WF.
          </p>
          <h1 className='text-gray-700 mb-6 text-center'>
            <span>
              {' '}
              <span className='text-gray-700 font-semibold'>
                Final damage ={' '}
              </span>{' '}
              WM + (ADD * WF)
            </span>
          </h1>
          <p className='text-gray-700 text-left'>
            For example, we will use Black Widow as a shooter with this weapon:
          </p>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Beretta}
              alt='Beretta M9'
            />
          </div>
          <p className='text-gray-700 mb-2 text-left'>
            For handguns Black Widow has 5 as Firearms skill, so the weapon
            modifier (WM) in this example is 5.
          </p>
          <p className='text-gray-700 mb-2 text-left'>
            We will shoot a target with an agility stat of 4.
          </p>
          <p className='text-gray-700 mb-2 text-left'>
            Black Widow attacks successfully to the target with a base roll of
            14, but the WM is added to the final roll making a total of 19. To
            avoid damage, the target makes a roll of 11 and its agility stat is
            added making its agility check a total of 15. Knowing this, the
            final damage is:
          </p>
          <h1 className='text-gray-700 mb-6 text-center'>
            <span>
              {' '}
              <span className='text-gray-700 font-semibold'>ADD = </span>19-15 =
              4
            </span>
          </h1>
          <h1 className='text-gray-700 mb-6 text-center'>
            <span>
              {' '}
              <span className='text-gray-700 font-semibold'>
                Final damage ={' '}
              </span>{' '}
              WM + (ADD * WF)
            </span>
          </h1>
          <h1 className='text-gray-700 mb-6 text-center'>
            <span>
              {' '}
              <span className='text-gray-700 font-semibold'>
                Final damage ={' '}
              </span>{' '}
              5 + (4 * 2) = 13
            </span>
          </h1>
          <p className='text-gray-700 mb-2 text-left'>
            It’s easier to calculate if you know that for every ADD, you add one
            WF. All firearms leave the victim bleeding.
          </p>
          <p className='text-gray-700 mb-2 text-left'>
            This system allows Firearms to deal a great range of damage. A non
            critical shot from the beretta m9 can deal between 3 and 58 damage.
          </p>
          <p className='text-gray-700 mb-2 text-left'>
            However weapons can easily fall from the user grip, when recieving
            an attack that deals knockback, the user must make a durability
            check of 10 or their weapon will fall from their hands.
          </p>
          <p className='text-gray-700 mb-2 text-left'>
            A character can also use their action to attempt to disarm another
            character. It is a strength duel. If the character that is
            attempting to disarm wins with a difference of more than 3 strength
            points they will keep the stolen weapon. If they win with a
            difference lower than 2, the weapon will fall to the ground.
          </p>
        </div>
      </div>

      <div className='p-10'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          Shooting long distances
        </h1>
        <div className='flex flex-col '>
          <p className='text-gray-700 mb-6'>
            When the weapon is used further its first limit of distance penalty
            the final damage will be reduced by a weapon factor (WF). The check
            for these distances is marksman instead of firearms.
          </p>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Sniper}
              alt='Sniper'
            />
          </div>
        </div>
      </div>

      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          Automatic and semi-automatic Firearms
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            For automatic firearms like Submachine guns, you can fire up to 10
            bullets on a single turn from which only 1d10 will hit. For
            semiautomatic firearms you can fire up 6 bullets on a single turn,
            but only 1d6 will hit. The damage is calculated only once and it
            applies for every bullet that hits. However these weapons have the
            bonus applied to the firearms or marksman check halfed.
          </p>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Machine}
              alt='Crossbones'
            />
          </div>
        </div>
      </div>

      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          Dual-Wielding Firearms
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            If a character is holding two firearms, one in each hand, they can
            attempt to fire the second weapon, but without the weapon modifier
            bonus.
          </p>
          <div className='flex justify-center'>
            {' '}
            {/* Added a flex container for centering */}
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Dual}
              alt='Black Widow'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objects
