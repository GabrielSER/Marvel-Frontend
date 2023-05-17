import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'


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
          <span
            className={clsx(
              'flex',
              'justify-center items-center',
              'w-min',
              'text-light',
              'font-montserrat font-bold',
              'hover:scale-105',
              'opacity-80 hover:opacity-100',
              location.pathname === to && [
                'border-b-4 border-primary',
                'opacity-100'
              ]
            )}
          >
            {text.toUpperCase()}
          </span>
        </Link>
      )
}

export default NavigationLink