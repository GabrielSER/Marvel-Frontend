import clsx from 'clsx'
import confused from '../../assets/photos/AboutUs/confused.png'


const NotFound = () => {
  return (
    <div  
      className={clsx(
        'bottom-0',
        'h-120',
        'bg-primary'
      )}
    >
      <img className='flex w-20 h-20 'src={confused}/>
    </div>
  )
}

export default NotFound