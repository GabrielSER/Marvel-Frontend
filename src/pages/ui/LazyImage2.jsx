import {useState, useEffect } from 'react';
import clsx from 'clsx';
import LazyLoad from 'react-lazy-load';

const LazyImage2 = ({ src, alt = 'image', className, imageClassname, placeholder, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <LazyLoad className={clsx(className)}>
      <div className="relative w-full h-full">
        {!isLoaded && placeholder}
        <img
          src={src}
          alt={alt}
          className={clsx(imageClassname, { 'hidden': !isLoaded, 'flip-in': isLoaded })}
          onLoad={() => {
            setIsLoaded(true);
            if (onLoad) onLoad();
          }}
        />
      </div>
    </LazyLoad>
  );
};

export default LazyImage2;
