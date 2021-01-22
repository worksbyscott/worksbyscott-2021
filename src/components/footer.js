import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="divider"></div>
            </div>
            <div className="row v-center space-between">
                <div className="footer-pages">
                    <Link to="/about">about</Link>
                    <Link to="/contact">contact</Link>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/worksbyscott"><Github /></a>
                    <a href=""><Instagram /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;