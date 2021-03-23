import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const DynamicImage = ({ source }) => {
    return (
        <>
            <LazyLoadImage
                alt={source}
                effect="blur"
                src={require('../images/' + source + '.jpg')} />
        </>
    );
}

export default DynamicImage;