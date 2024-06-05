import clsx from 'clsx'
import confused from '../../assets/photos/AboutUs/confused.png'

const NotFound = () => {
  return (
    <div className={clsx('flex relative', 'bg-primary', 'object-cover')}>
      <img
        className='flex w-full h-full'
        src={confused}
      />
      <h1 className='flex absolute w-full h-full justify-center items-center text-4xl text-white'>
        Oh oh!
      </h1>
    </div>
  )
}

export default NotFound
