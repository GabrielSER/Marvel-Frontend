import { useEffect, useState } from 'react'
import { useUser } from '@contexts/UserContext'
import Circular from '@ui/Circular'
import UserDropDown from './dropdown/UserDropdown'
import unknownUser from '@assets/images/unknown_user.jpg'
import clsx from 'clsx'

const UserMenu = () => {
  const { user } = useUser()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      {
        active &&
        <div
          className='fixed top-0 -left-2 w-[100vw] h-[100vh] bg-dark/60 backdrop-blur-md'
          onClick={() => setActive(false)}
        />
      }
      <div className='flex relative'>
        <div
          className={clsx(
            active && 'absolute z-header bg-dark w-full top-0 h-14 rounded-t-full border border-light-2'
          )}
        />
        <Circular
          className='w-10 border-2 border-primary z-max'
          onClick={() => setActive(!active)}
        >
          <img
            className='w-full h-full object-cover z-max'
            src={user?.photo ?? unknownUser}
            alt='User photo'
          />
        </Circular>
        {active && <UserDropDown setActive={setActive} />}
      </div>
    </>
  )
}

export default UserMenu
