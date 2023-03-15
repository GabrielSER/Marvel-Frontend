import clsx from 'clsx'
import LanguageLink from './LanguageLink'
import UserLogo from './UserLogo'


const StateBar = () => {
    return (
        <div
            className={clsx(
                'flex shrink-0',
                'justify-end items-center',
                'space-x-2',
                'p-2',
                'bg-dark',
                'shadow-lg'
            )}
        >
            <LanguageLink label='EN' active={true} />
            <LanguageLink label='ES' />
            <UserLogo />
        </div>
    )
}

export default StateBar