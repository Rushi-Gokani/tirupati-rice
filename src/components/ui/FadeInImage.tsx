import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  className,
  containerClassName,
  alt,
  src,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-700 ease-in-out w-full h-full",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)'
        }}
        {...props}
      />
    </div>
  );
};

export default FadeInImage;
