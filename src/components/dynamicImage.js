import React from 'react';
import { Link } from 'react-router-dom';

const DynamicImage = ({ source }) => {
    return (
        <>
            <img src={require('../images/' + source + '.jpg')} />
        </>
    );
}

export default DynamicImage;