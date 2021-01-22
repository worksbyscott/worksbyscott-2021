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
                        CellaFm is an online radio station built to help promote local Scottish DJs and radio hosts during the COVID-19 pandemic.
                </h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo1" />
                </div>
                <div className="row">
                    <h1 className="secondary">Built using ReactJS on the front-end and NodeJS on the back-end in conjunction with AirtimePro’s API for audio streaming to broadcast the shows live.</h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo2" />
                </div>
                <div className="row">
                    <h1 className="secondary">Built using ReactJS on the front-end and NodeJS on the back-end in conjunction with AirtimePro’s API for audio streaming to broadcast the shows live.</h1>
                </div>
                <div className="row">
                    <ProjectImage source="echo3" />
                </div>
            </div>

        </Page>
    );
};

export default Echo;