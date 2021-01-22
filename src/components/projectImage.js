import React from 'react';
import { motion } from 'framer-motion';
import DynamicImage from '../components/dynamicImage'

const ProjectImage = ({ source }) => {
    return (
        <>

            <div className="project-image">
                <DynamicImage source={source} />
            </div>

        </>
    );
}

export default ProjectImage;