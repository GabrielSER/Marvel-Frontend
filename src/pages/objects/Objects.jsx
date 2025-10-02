

import Deadpool from '../../assets/images/combat/deadpool.jpg'
import Pistol from '../../assets/images/combat/PISTOL.png'
import Shotgun from '../../assets/images/combat/SHOTGUN.png'
import AssaultRifle from '../../assets/images/combat/ASSAULTRIFLE.png'
import SUBMACHINE from '../../assets/images/combat/SUBMACHINE.png'
import PLASMA from '../../assets/images/combat/PLASMARIFLE.png'
import SNIPERRIFLE from '../../assets/images/combat/SNIPER.png'
import MACHINEGUN from '../../assets/images/combat/MACHINE.png'
import BLASTER from '../../assets/images/combat/BLASTER.png'

import KATANA from '../../assets/images/combat/KATANA.png'
import KNIFE from '../../assets/images/combat/Knife.png'
import SHORTSWORD from '../../assets/images/combat/SHORTSWORD.png'
import LONGSWORD from '../../assets/images/combat/LONGSWORD.png'
import BATONS from '../../assets/images/combat/BATONS.png'
import WARHAMMER from '../../assets/images/combat/WARHAMMER.png'
import GREATHAMMER from '../../assets/images/combat/GREATHAMMER.png'
import SAI from '../../assets/images/combat/SAI.png'
import SHURIKEN from '../../assets/images/combat/SHURIKEN.png'
import SHIELD from '../../assets/images/combat/SHIELD.png'
import QUARTERSTAFF from '../../assets/images/combat/QUARTERSTAFF.png'
import TRIDENT from '../../assets/images/combat/TRIDENT.png'
import GREATSWORD from '../../assets/images/combat/GREATSWORD.png'
import SPEAR from '../../assets/images/combat/SPEAR.png'
import HANDAXE from '../../assets/images/combat/handaxe.png'
import AXE from '../../assets/images/combat/AXE.png'
import GREATAXE from '../../assets/images/combat/GREATAXE.png'
import LIGHTSABER from '../../assets/images/combat/LIGHTSABER.png'

import GRENADE from '../../assets/images/combat/GRENADE.png'
import FLASHBANG from '../../assets/images/combat/FLASHBANG.png'
import INCENDIARY from '../../assets/images/combat/INCENDIARY.png'
import C4 from '../../assets/images/combat/C4.png'
import RPG from '../../assets/images/combat/RPG.png'
import MINE from '../../assets/images/combat/MINE.png'
import Dual from '../../assets/images/combat/dualpistol.PNG'
import ComicTitlePanel from '../ui/ComicTitlePanel'
import ObjectList from './ObjectList'
import ISO8Generator from './ISO8Generator'

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
          For a character to be able to use firearms, they need to meet a firearms requirement depending on the weapon they want to use. When shooting with a weapon, the firearms skill check is performed against the defense or an agility check of the target (at the target's choice). If the check passes, the damage is performed, which is calculated by rolling a number of dice indicated by the weapon used. If one of those dice performs critical damage (indicated on the weapon), the dice is rolled again and added to the damage. This new roll can also perform critical damage. Firearms cannot combo. Firearms have these attributes:
        </p>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Weapon range:
            </span>{' '}
            The range of a weapon is dictated by two numbers, the first one is for full damage, the second one is for half damage, any shots after that range fail automatically.
          </p>
          <p className='text-black text-left'>
            <span className='text-gray-700 font-bold text-left'>
              •  Firerate:
            </span>{' '}
            This dictates how many shots can be done with the same action of this weapon in a single turn, every shot adds 1 more damage dice to the total damage and spends 1 more ammo, the amount of extra shots is calculated by the difference between the firearm's check and the defense of the target.
          </p>
          <p className='text-black text-left pl-10'>
            <span className='text-blue-500 font-bold text-left'>
              -  Single Shot:
            </span>{' '}
            This type of weapon can only shoot once per turn.
          </p>
          <p className='text-black text-left pl-10'>
            <span className='text-blue-500 font-bold text-left'>
              -  Semi-automatic:
            </span>{' '}
            This weapon can add one more damage dice per 2 points of difference in the skill checks.
          </p>
          <p className='text-black text-left pl-10'>
            <span className='text-blue-500 font-bold text-left'>
              -  Automatic:
            </span>{' '}
            This weapon can add one more damage dice per point of difference in the skill checks.
          </p>
          <p className='text-gray-700 text-left'>
            <span className='text-gray-700 font-semibold text-left'>
              • Ammo:
            </span>{' '}
            This dictates the ammunition capacity for this weapon, once this runs out you can't shoot anymore until you take the reload action.
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
          List of Firearms
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            Here is a list of common weapons:
          </p>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Pistol}
              alt='Pistol'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={Shotgun}
              alt='Shotgun'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={AssaultRifle}
              alt='Assault Rifle'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SUBMACHINE}
              alt='SubMachine Gun'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={PLASMA}
              alt='Plasma Rifle'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SNIPERRIFLE}
              alt='Sniper Rifle'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={MACHINEGUN}
              alt='Machine Gun'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={BLASTER}
              alt='Blaster'
            />
          </div>
        </div>
      </div>

      <div className='px-10 max-w-full items-center'>
        <Title>Melee Weapons</Title>
        <p className='text-gray-700 mb-6 text-left'>
          When using melee weapons, instead of using the damage dice of your strength stat, use the damage dice indicated by the weapon you’re using and for the skill check you use melee weapons. For being able to use the weapon you need to be able to meet the requirements, otherwise your attacks with that weapon are done at disadvantage and you can't use the weapon quirks.
        </p>
      </div>





      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          List of Melee Weapons
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            Here is a list of common weapons:
          </p>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={KATANA}
              alt='Katana'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={KNIFE}
              alt='Knife'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SHORTSWORD}
              alt='Shortsword'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={LONGSWORD}
              alt='Longsword'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={BATONS}
              alt='Batons'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={WARHAMMER}
              alt='War-Hammer'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={GREATHAMMER}
              alt='Greathammer'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SAI}
              alt='Sai'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SHURIKEN}
              alt='Shuriken'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SHIELD}
              alt='Shield'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={QUARTERSTAFF}
              alt='Quarterstaff'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={TRIDENT}
              alt='Trident'
            />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={GREATSWORD}
              alt='Greatsword'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={SPEAR}
              alt='Spear'
            />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={HANDAXE}
              alt='Handaxe'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={AXE}
              alt='Axe'
            />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={GREATAXE}
              alt='Great-axe'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={LIGHTSABER}
              alt='lightsaber'
            />
          </div>



        </div>
      </div>





      <div className='px-10 max-w-full items-center'>
        <Title>Explosives</Title>
        <p className='text-gray-700 mb-6 text-left'>
          Explosives can be used as traps, can be thrown or can befired from weapons depending on their properties.
        </p>
      </div>





      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          List of Explosives
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            Here is a list of common explosives:
          </p>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={GRENADE}
              alt='Grenade'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={FLASHBANG}
              alt='Flashbang'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={INCENDIARY}
              alt='Incendiary Grenade'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={C4}
              alt='C4'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={RPG}
              alt='RPG'
            />
            <img
              className='lg:max-w-lg max-w-xs rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 m-4'
              src={MINE}
              alt='Anti-personnel Mine'
            />
          </div>



        </div>
      </div>


      <div className='px-10 max-w-full items-center'>
        <h1 className='text-xl font-semibold mb-4 text-center'>
          Dual-Wielding Weapons
        </h1>
        <div className='flex flex-col items-left'>
          <p className='text-gray-700 mb-6 text-left'>
            If a character is holding two weapons that are one handed, one in each hand, after they do their normal attack or combo, they can attempt to attack with the second weapon as a bonus action, this attack doesn’t add the skill to the check nor the damage modifier.
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
      <ObjectList></ObjectList>
      <ISO8Generator></ISO8Generator>
    </div>
  )
}

export default Objects
