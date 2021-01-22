import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const titleVariant = {
    hidden: {
        y: 0,
    },
    show: {
        transition: {
            delay: .2,
            staggerChildren: 0.3,
            staggerDirection: 1,
        },
    },
}

const variants = {
    hidden: {
        y: 40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: .3, ...transition },
    }
}

const PageTitle = ({ headline, subhead, action, url }) => {
    return (
        <div className="row">
            <motion.div
                key={headline}
                className="headline"
                initial={"hidden"}
                animate={"show"}
                variants={titleVariant}>

                <motion.h1 variants={variants}>{headline}</motion.h1>

                {subhead &&
                    <motion.h2 variants={variants}>{subhead}</motion.h2>
                }

                <motion.div
                    className="action"
                    variants={variants}
                    key={headline + "action"}>
                    <Link to={url}>
                        {action}   →
                    </Link>
                </motion.div>
            </motion.div>
        </div>

    );
}

export default PageTitle;