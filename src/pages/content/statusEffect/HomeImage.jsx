const HomeImage = (props) => {
  const { src, alt } = props
  return (
    <img
      className='h-100 object-cover shadow-md scale-95 transition-all hover:scale-100 duration-300 w-max rounded-lg'
      src={src}
      alt={alt}
    />
  )
}
export default HomeImage
