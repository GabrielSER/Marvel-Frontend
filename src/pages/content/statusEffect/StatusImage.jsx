const StatusImage = (props) => {
    const { src, alt } = props
    return (
        <img
            className='h-72 object-cover shadow-md scale-95 transition-all hover:scale-100 duration-300 w-full md:w-1/2 rounded-lg'
            src={src}
            alt={alt}
        />
    )
}
export default StatusImage