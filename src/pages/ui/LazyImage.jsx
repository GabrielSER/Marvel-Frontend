import clsx from 'clsx'
import LazyLoad from 'react-lazy-load'

const LazyImage = (props) => {

    const {
        src,
        alt = 'image',
        className,
        imageClassname
    } = props

    return (
        <LazyLoad className={clsx(className)}>
            <img
                src={src}
                alt={alt}
                className={clsx(imageClassname)}
            />
        </LazyLoad>
    )
}

export default LazyImage