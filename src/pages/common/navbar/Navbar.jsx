import clsx from 'clsx'
import NavigationContainer from './NavigationContainer'
import NavigationLink from './NavigationLink'
import StateBar from './StateBar'

const Navbar = () => {
    
    return (
        <div
            className={clsx(
                ' flex flex-col',
                'w-full',
                'p-2',
                'bg-dark',
                'shadow-lg',
                'z-40'
            )}
        >
            <StateBar />
            <NavigationContainer>
                <NavigationLink
                    text='Home'
                    to='/'
                />
                <NavigationLink
                    text='Characters'
                    to='/characters'
                />
                <NavigationLink
                    text='Marvel Universe'
                    to='/places'
                />
                <NavigationLink
                    text='Objects'
                    to='/objects'
                />
                <NavigationLink
                    text='Campaign Rules'
                    to='/rules'
                />
                 <NavigationLink
                    text='Player Guide'
                    to='/player'
                />
                <NavigationLink
                    text='Combat'
                    to='/combat'
                />
                <NavigationLink
                    text='Roleplaying'
                    to='/roleplaying'
                />
            </NavigationContainer>
        </div>
    )
}

/**
 * 
 */

export default Navbar