import React from "react";

import Page from '../components/page';
import PageTitle from '../components/pagetitle';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Mail } from '../assets/send.svg';

const Contact = () => {
    return (
        <Page>
            <div className="contact">
                <div className="row">
                    <h1>Let's Connect</h1>
                </div>
                <div className="row">
                    <p className="secondary">
                        If you would like to get in contact about working together on an project or speak to me directly email <span href="mailto:info@worksbyscott.uk">info@worksbyscott.uk.</span>
                    </p>
                </div>
                <div className="row">
                    <div className="contact-links">
                        <a href="https://github.com/worksbyscott"><Github /></a>
                        <a href="https://www.instagram.com/worksbyscott/"><Instagram /></a>
                        <a href="mailto:info@worksbyscott.uk"><Mail /></a>
                    </div>
                </div>
            </div>
        </Page>

    );
};

export default Contact;