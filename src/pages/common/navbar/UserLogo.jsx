import clsx from 'clsx'
import unknownUser from '../../../assets/images/unknown_user.jpg'
import { useUser } from '../../../contexts/UserContext'
import Circular from '../../ui/Circular'
import { useCallback, useState } from 'react'
import UIButton from '../../ui/UIButton'
import { useNavigate } from 'react-router-dom'


const UserDropDown = (props) => {

    const { logout } = useUser()

    const navigate = useNavigate()

    const logoutClick = useCallback(() => {
        logout()
        navigate('/login')
    }, [logout, navigate])

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'absolute',
                'z-50',
                'w-80',
                'dark-box',
                'shadow-lg',
                'right-0 top-[120%]',
                'transition-all duration-500',
                'p-2',
                'overflow-hidden',
                'gap-2'
            )}

        >

            <UIButton onClick={logoutClick}>
                Log Out
            </UIButton>
        </div>
    )
}

const UserLogo = () => {

    const { user } = useUser()

    const [active, setActive] = useState(false)

    return (
        <div className='flex relative'>
            <Circular
                className='w-10 border-2 border-primary'
                onClick={() => setActive(!active)}
            >
                <img
                    className='w-full h-full object-cover'
                    src={user?.photo ?? unknownUser}
                    alt='User photo'
                />

            </Circular>
            {
                active &&
                <UserDropDown setActive={setActive} />
            }
        </div>
    )
}

export default UserLogo