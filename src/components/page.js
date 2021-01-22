import React, { Children } from 'react'
import { motion } from 'framer-motion';


import Overlay from './overlay';
import Navigation from './navigation'
import Footer from "./footer";
import LetsConnect from "./letsConnect";

const Page = (props) => {
    return (
        <>
            <Overlay />
            <div className="page">
                <div className="container">
                    <Navigation />
                    <div className="page-content">
                        {props.children}
                    </div>
                    <LetsConnect />
                    <Footer />
                </div>
            </div>
        </>

    )
}

export default Page;