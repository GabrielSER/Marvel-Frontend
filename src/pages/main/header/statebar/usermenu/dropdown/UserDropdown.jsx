import clsx from 'clsx'
import LogOutButton from './LogOutButton'
import PreferencesButton from './PreferencesButton'

const UserDropDown = () => {

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'absolute',
                'z-max',
                'min-w-max',
                'dark-box',
                'shadow-lg',
                'right-0 top-[120%]',
                'transition-all duration-500',
                'p-1',
                'overflow-hidden',
                'gap-0.5'
            )}
        >
            <LogOutButton />
            <PreferencesButton />
        </div>
    )
}

export default UserDropDown