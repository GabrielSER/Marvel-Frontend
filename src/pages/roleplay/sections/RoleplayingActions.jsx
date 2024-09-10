import RoleplaySection from './RoleplaySection'
import SectionTitle from '../SectionTitle'
import SectionParagraph from '../SectionParagraph'

const RoleplayingActions = () => {
    return (
        <RoleplaySection name='actions'>
            <SectionTitle title='Roleplaying Actions' big />
            <SectionParagraph>
                When roleplaying, characters can perform many kinds of actions. In
                this game, actions are divided in three categories. Common Actions,
                Special Actions and Custom Actions. Common actions are actions that
                can be performed by normal humans. For example, every character can
                lie. Some characters are better lying than others, but every character
                can attempt that action. Every character can also attempt to fire a
                gun, though some characters find it harder, but every character can
                attempt to do it. Special Actions are those that, despite in some
                cases every character can do it, superhuman abilities can create a
                huge difference when trying to perform said action. For example,
                Daredevil is not even close to being capable of lifting the same
                weight as the Hulk can and Hawkeye is not able to Jump as high as
                Jessica Jones. Custom actions are special cases in which a player
                comes up with different kinds of actions that cannot be described as
                common or special actions.
            </SectionParagraph>
        </RoleplaySection>
    )
}

export default RoleplayingActions