import React from 'react';
import { Link } from 'react-router-dom'

import DynamicImage from './dynamicImage'

const HomeImage = ({ title, description, source, link }) => {
    return (
        <div className="row">
            <div className="home-hero">
                <Link to={link}>
                    <div className="hero-info">
                        <div className="hero-details">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="hero-action">

                    </div>

                    <DynamicImage source={source} />
                </Link>
            </div>
        </div>


    );
}

export default HomeImage;