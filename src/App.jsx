
import clsx from 'clsx'
import MainBody from './pages/common/MainBody'

const App = () => {

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'w-full h-full',
        'overflow-x-hidden overflow-y-hidden',
        'font-comic',
        'bg-local'
      )}
      style={{
        backgroundImage: `url(https://i.ibb.co/Jqr4f35/backgound.png)`,
        backgroundRepeat: 'repeat'
      }}
    >
      <MainBody />
    </div>
  )
}

export default App
