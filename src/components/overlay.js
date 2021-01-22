import React from 'react';
import { motion } from 'framer-motion'

const variants = {
    initial: {
        width: '100vw'
    },
    animate: {
        width: 0
    },
    exit: {
        width: '100vw'
    }
}

const Overlay = () => {
    return (
        <motion.div
            key="overlay"
            className="overlay"
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={variants}
            transition={{
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            }}
        />

    );
}

export default Overlay;