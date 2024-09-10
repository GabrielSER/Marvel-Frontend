import Xmen from '@assets/images/combat/xmen.jpg'
import RoleplaySection from './RoleplaySection'
import SectionTitle from '../SectionTitle'
import LazyImage from '@ui/LazyImage'

const CustomActions = () => {
    return (
        <RoleplaySection name='custom-actions'>
            <SectionTitle title='Custom Actions' />
            <p className='text-gray-700 mb-6 justify-center py-4'>
                During a play session, a player can come up with different kind of
                actions that are not described on the roleplaying actions section or
                as a power, skill, or ability for a certain character. These are
                custom actions. On these situations, the GM may or may not allow the
                player to perform given action, and if the custom action is permitted,
                he can ask for a certain dice check according to how difficult may it
                be to perform that specific custom action for the player's character.
                If the player's character is an already existing Marvel character, the
                GM may consider if that character has performed that custom action
                before in some media, or how hard would it be for a that character to
                perform this custom action. If the player's character is a custom
                character, the GM may evaluate the character's powers, stats, skills,
                and abilities to stablish if the character can perform given custom
                action and the dice check necessary for that action to be successful,
                according to how hard may that action be for this custom character.
                Custom actions can also be performed in battle, and they can also rest
                power points if the GM considers it would do so.
            </p>
            <div className='flex justify-center'>
                <LazyImage
                    className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
                    src={Xmen}
                    alt='X-Men'
                />
            </div>
        </RoleplaySection>
    )
}

export default CustomActions