import RoleplaySection from './RoleplaySection'
import SectionTitle from '../SectionTitle'
import SectionParagraph from '../SectionParagraph'

const SpecialActions = () => {
    return (
        <RoleplaySection name='special-actions'>
            <SectionTitle title='Special Actions' />
            <SectionParagraph>
                Some actions can be completely different depending on the character
                you're playing. This kind of actions will be scaled according to a
                range, and the capacity of certain character to perform given action
                will be given by the Stat, Skill or Attribute required for it to be
                performed. These are some examples of special actions and how do they
                work:
            </SectionParagraph>
        </RoleplaySection>
    )
}

export default SpecialActions