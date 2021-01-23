import React from "react";

import Page from '../components/page';
import PageTitle from '../components/pagetitle'

const About = () => {
    return (
        <Page>
            <PageTitle headline="About Me" url="/contact" action="Let's Connect" />
            <div className="about">
                <div className="row">
                    <h1 className="primary">I am a Front End Developer and UI/UX Designer with minimal backend experience, primarily working with in React. Graduating from Edinburgh Napier with an Honours in User Experience Design.</h1>
                </div>
                <div className="row">
                    <h1 className="secondary">Originally from a Graphic Design background and experience of illustration, combining this expertise with user experience methodogly to produce effective and engaging web applications. Currently looking for an graduate job within the industry to progress my career.
</h1>
                </div>
            </div>
        </Page>

    );
};

export default About;