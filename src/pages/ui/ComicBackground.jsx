import clsx from 'clsx'

const ComicBackground = (props) => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-col flex-initial',
        'w-full h-full',
        'overflow-x-hidden overflow-y-hidden',
        'overscroll-none',
        'font-comic',
        'bg-local'
      )}
      style={{
        backgroundImage: `url(https://i.ibb.co/Jqr4f35/backgound.png)`,
        backgroundRepeat: 'repeat'
      }}
    >
      {props.children}
    </div>
  )
}

export default ComicBackground
