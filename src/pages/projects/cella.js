import React from "react";

import Page from '../../components/page'
import PageTitle from '../../components/pagetitle'
import ProjectImage from '../../components/projectImage'
import { footerAction as FooterAction } from "../../components/footerAction";

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
                    <ProjectImage source="cella/cella2" />
                </div>
                <div className="row">
                    <h1 className="primary">
                        CellaFm is an online radio station built to help promote local Scottish DJs and radio hosts during the COVID-19 pandemic.
                </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella/cella" />
                </div>
                <div className="row">
                    <h1 className="secondary">Originally produced using Node in and HandleBars to emulate an SPA framework approach with minimal libraries used in the front-end. Now being redeveloped in React on the front-end and express. </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella/cella3" />
                </div>
                <div className="row">
                    <h1 className="secondary">In this transition to more modern framework approach, I decided to rework the CellaFM brand and website design to promote a more consistent brand image and push my capabilities in the process. </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella/cella4" />
                </div>
                <div className="row">
                    <h1 className="secondary">Originally produced using Node in and HandleBars to emulate an SPA framework approach with minimal libraries used in the front-end. Now being redeveloped in React on the front-end and express. </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cella/cella5" />
                </div>
            </div>
            <FooterAction
                label="under development"
                action="View Github"
                title="CellaFM currently under development"
                url="https://github.com/worksbyscott/cella.fm/tree/master/cella-fm"
            />

        </Page>
    );
};

export default Cella;