import React, {useEffect, useState} from 'react';
// @ts-ignore
import {customClassSwitcher} from '@/core';

type AvatarImageProps = {
    src: string;
    alt: string;
    className: string;
    customRootClass: string;
};

const AvatarImage: React.FC<AvatarImageProps> = ({src='src', alt='', customRootClass='', className='', ...props}) => {
    const rootClass = customClassSwitcher(customRootClass, 'Avatar');

    const [isBrokenImage, setIsBrokenImage] = useState(false);

    const handleImageLoaded = () => {
        console.log('image loaded');
        setIsBrokenImage(false);
    };

    const handleImageError = () => {
        setIsBrokenImage(true);
    };

    useEffect(() => {
    }, [isBrokenImage]);

    if (isBrokenImage) {
        return null;
    }

    return (
        <img src={src} alt={alt} onError={handleImageError} onLoad={handleImageLoaded} className={`${rootClass} ${className}`} {...props} />
    );
};

export default AvatarImage;