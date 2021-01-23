import React, { useState, useEffect } from 'react';
import { motion, useIsPresent } from 'framer-motion'

const variants = {
    initial: {
        width: '100%'
    },
    animate: {
        width: 0
    },
    exit: {
        width: '100%'
    }
}

const Overlay = () => {
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    const completeTransition = () => {
        setCanScroll(true);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);

    }

    const startTransition = () => {
        setCanScroll(false);
    }

    return (
        <motion.div
            key={"overlay"}
            className="overlay"
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={variants}
            onAnimationComplete={completeTransition}
            onAnimationStart={startTransition}
            transition={{
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            }}
        />

    );
}

export default Overlay;