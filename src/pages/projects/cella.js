import React from "react";

import Page from '../../components/page'
import PageTitle from '../../components/pagetitle'
import ProjectImage from '../../components/projectImage'

const Cella = () => {
    return (
        <Page>
            <PageTitle
                headline="Online Community Radio Station"
                subhead="Development, Design, Deployment"
                url="/contact"
                action="View Github"
                key={"pageTitle"}
            />
            <div className="project">
                <div className="row">
                    <ProjectImage source="cella" />
                </div>
                <div className="row">
                    <h1 className="primary">
                        CellaFm is an online radio station built to help promote local Scottish DJs and radio hosts during the COVID-19 pandemic.
                </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella" />
                </div>
                <div className="row">
                    <h1 className="secondary">Built using ReactJS on the front-end and NodeJS on the back-end in conjunction with AirtimePro’s API for audio streaming to broadcast the shows live.</h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella" />
                </div>
            </div>

        </Page>
    );
};

export default Cella;