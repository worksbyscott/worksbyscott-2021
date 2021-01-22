import React from 'react';
import { motion } from 'framer-motion'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const exitVar = {
    hidden: {
        width: "0vw",
        transition: { ...transition },
    },
    visable: {
        width: '100vw',
        transition: { ...transition },
    }
}

const lineVariant = {
    hidden: {
        y: 0
    },
    show: {
        y: 0,
        transition: {
            delay: 1,
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
    exit: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
}

const letterVariant = {
    hidden: {
        y: 100,
    },
    show: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
    exit: {
        y: -100,
        transition: { duration: 1, ...transition },
    }
};

const Introduction = () => {

    const string = "worksbyscott.uk"

    const replaceSpace = (letter) => {
        if (letter === " ")
            return "\u00A0";
        return letter;
    }

    const heroString = Array.from(string).map((letter) => replaceSpace(letter));

    return (
        <div className="intro">
            <motion.div
                key="intro-overlay"
                className="intro-overlay"
                initial={"hidden"}
                animate={"visable"}
                variants={exitVar}
                transition={{
                    duration: 1,
                    ease: [0.6, 0.05, -0.01, 0.9],
                }}
            />
            <div className="intro-headline">
                <motion.span
                    key="intro-line"
                    className="intro-line"
                    initial={"hidden"}
                    animate={"show"}
                    exit={"exit"}
                    variants={lineVariant}>
                    {heroString.map((letter, index) => (
                        <motion.span key={letter + index} variants={letterVariant}> {letter} </motion.span>
                    ))}
                </motion.span>
            </div>
        </div>
    )
}

/*
                    {heroString.map((letter, index) => (
                        <motion.span variants={letterVariant}> {letter} </motion.span>
                    ))}
*/

export default Introduction; 