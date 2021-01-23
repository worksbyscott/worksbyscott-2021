import React from "react";

import Page from '../../components/page'
import PageTitle from '../../components/pagetitle'
import ProjectImage from '../../components/projectImage'

const Echo = () => {
    return (
        <Page>
            <PageTitle
                headline="Concept Company Branding"
                subhead="Branding, Web Design"
                url="/contact"
                action="View Behance Project"
                key={"pageTitle"}
            />
            <div className="project">
                <div className="row">
                    <ProjectImage source="echo" />
                </div>
                <div className="row">
                    <h1 className="primary">
                        Web Design prototype and concept branding project. Project aim was to create a fluid design system to apply brand guidelines to UX design. Echo is an mockup audio company selling high quality audio earphones.
                </h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo1" />
                </div>
                <div className="row">
                    <h1 className="secondary">Design guidelines were established by creating a Logo that accurately represented the brands goal. Fonts and style guide were produced before progressing into layout design. </h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo2" />
                </div>
                <div className="row">
                    <h1 className="secondary">With a modern website , not having a design system is an absolute nightmare. I've been working to establish a design system through out the time and applied this method to this project and soon I am looking to use Stencil.js to get the Design System developed.</h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo3" />
                </div>
            </div>

        </Page>
    );
};

export default Echo;