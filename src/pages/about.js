import React from "react";

import Page from '../components/page';
import PageTitle from '../components/pagetitle'

const About = () => {
    return (
        <Page>
            <PageTitle headline="About Me" url="/contact" action="Let's Connect" />
            <div className="about">
                <div className="row">
                    <h1 className="primary">My name is Scott Templeton, 4th year Edinburgh Napier University student completing an Honours in User Experience Design.</h1>
                </div>
                <div className="row">
                    <h1 className="secondary">My name is Scott Templeton, 4th year Edinburgh Napier University student completing an Honours in User Experience Design. Focused on producing elegant UX design and experience with Front-end Javascipt technologies such as React and Vue to produce web-based applications. Currently developing an Javascipt animation library to implement micro interactions and responsive animations with an lightweight code base. </h1>
                </div>
            </div>
        </Page>

    );
};

export default About;