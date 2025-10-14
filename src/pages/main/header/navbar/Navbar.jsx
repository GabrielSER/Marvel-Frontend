import clsx from 'clsx'
import NavigationContainer from './NavigationContainer'
import NavigationLink from './NavigationLink'
import Banner from '../Banner'


const Navbar = () => {


  return (
    <div
      className={clsx(
        'flex flex-col pt-16',
        'w-full',
        'snap-start',
        'bg-dark',
        'shadow-lg',
        'z-over-page',
        'overflow-y-auto max-h-screen'
      )}
    >
      <Banner />
      <NavigationContainer>
        <NavigationLink
          text={"Home"}
          to='/'
        />
        <NavigationLink
          text={"Characters"}
          to='/types'
        />
        <NavigationLink
          text={"Player Guide"}
          to='/player'
        />
        <NavigationLink
          text={"OOA's Guide"}
          to='/rules'
        />
        <NavigationLink
          text={"Combat"}
          to='/combat'
        />
        <NavigationLink
          text={"Roleplaying"}
          to='/roleplaying'
        />
        <NavigationLink
          text={"Marvel Universe"}
          to='/places'
        />
        <NavigationLink
          text={"Objects"}
          to='/objects'
        />
      </NavigationContainer>
    </div>
  )
}

export default Navbar
