import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const variants = {
    hidden: {
        opacity: 0
    },
    visable: {
        opacity: 1
    }
}

const ProjectTitle = ({ headline, subhead, action, url }) => {
    return (
        <div className="row">
            <div className="headline">
                <h1>{headline}</h1>
                {subhead && <h2>{subhead}</h2>}
                <div className="action">
                    <Link to={url}>
                        <a>{action}   →</a>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default ProjectTitle;