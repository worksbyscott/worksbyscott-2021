import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Mail } from '../assets/send.svg';

const Navigation = ({ intro }) => {
    return (
        <nav>
            <div className="row v-center space-between">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="nav-links">
                    <a href="https://github.com/worksbyscott"><Github /></a>
                    <a href="https://www.instagram.com/worksbyscott/"><Instagram /></a>
                    <a href="mailto:info@worksbyscott.uk"><Mail /></a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;