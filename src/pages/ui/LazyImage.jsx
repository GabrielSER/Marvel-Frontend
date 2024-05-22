import { useState } from 'react';
import clsx from 'clsx';
import LazyLoad from 'react-lazy-load';

const LazyImage = ({ src, alt = 'image', className, imageClassname, placeholder }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <LazyLoad className={clsx(className)}>
            <div className="relative w-full h-full">
                {!isLoaded && (
                    <div className="absolute inset-0">
                        {placeholder}
                    </div>
                )}
                <img
                    src={src}
                    alt={alt}
                    className={clsx(imageClassname, { 'hidden': !isLoaded, 'flip-in': isLoaded })}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </LazyLoad>
    );
};

export default LazyImage;
