import FirstFamily from '@assets/images/combat/firstfamily.jpg'
import RoleplaySection from './RoleplaySection'
import LazyImage from '@ui/LazyImage'
import SectionTitle from '../SectionTitle'
import SectionParagraph from '../SectionParagraph'

const CustomActions = () => {
    return (
        <RoleplaySection name='common-actions'>
            <SectionTitle title='Common Actions' />
            <SectionParagraph>
                A character that wants to perform any kind of action, must perform a
                1d20 dice check, the number obtained in the dice will have a bonus
                according to the skill, stat or attribute required to perform given
                action. For example, hiding from another character requires the skill
                'stealth', so the user must throw 1d20 and add the stealth skill value
                to the dice result. The GM will decide the check required for the
                action to be successful according to the circumstances, but the most
                basic successful action requires a result of 10.
            </SectionParagraph>
            <div className='flex justify-center'>
                <LazyImage
                    className='max-w-full lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6'
                    src={FirstFamily}
                    alt='FF'
                />
            </div>
        </RoleplaySection>
    )
}

export default CustomActions