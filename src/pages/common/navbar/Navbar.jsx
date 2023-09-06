import clsx from 'clsx'
import NavigationContainer from './NavigationContainer'
import NavigationLink from './NavigationLink'
import StateBar from './StateBar'

const Navbar = () => {
    
    return (
        <div
            className={clsx(
                'flex flex-col',
                'w-full',
                'p-2',
                'bg-dark',
                'shadow-lg'
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
                    text='Places'
                    to='/places'
                />
                <NavigationLink
                    text='Objects'
                    to='/objects'
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