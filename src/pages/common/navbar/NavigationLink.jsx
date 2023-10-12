import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import NavigationTab from '../../ui/NavigationTab'


const NavigationLink = (props) => {

    const {
        text,
        to
      } = props
    
      const location = useLocation()
    
      return (
        <Link
          className={clsx(
            'flex',
            'justify-center items-center',
            'w-min',
            'px-3 pt-2',
            'bg-dark',
            'font-montserrat font-bold'
          )}
          to={to}
        >
          <NavigationTab active={location.pathname === to}>
            {text.toUpperCase()}
          </NavigationTab>
        </Link>
      )
}

export default NavigationLink