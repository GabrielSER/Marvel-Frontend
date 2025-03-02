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
          to='/characters'
        />
        <NavigationLink
          text={"Marvel Universe"}
          to='/places'
        />
        <NavigationLink
          text={"Objects"}
          to='/objects'
        />
        <NavigationLink
          text={"Campaign Rules"}
          to='/rules'
        />
        <NavigationLink
          text={"Player Guide"}
          to='/player'
        />
        <NavigationLink
          text={"Combat"}
          to='/combat'
        />
        <NavigationLink
          text={"Roleplaying"}
          to='/roleplaying'
        />
      </NavigationContainer>
    </div>
  )
}

export default Navbar
