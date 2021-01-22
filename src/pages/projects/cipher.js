import React from "react";

import Page from '../../components/page'
import PageTitle from '../../components/pagetitle'
import ProjectImage from '../../components/projectImage'

const Cipher = () => {
    return (
        <Page>
            <PageTitle
                headline="Encoded Messenging Service"
                subhead="Development, Design, Deployment"
                url="/contact"
                action="View Github"
                key={"pageTitle"}
            />
            <div className="project">
                <div className="row">
                    <ProjectImage source="cipher" />
                </div>
                <div className="row">
                    <h1 className="primary">
                        Turbo Ciphers is an message encoder that allows users encode Plain text messages into variety of different ciphers. Rot13, Viguire and more
                    </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cipher" />
                </div>
                <div className="row">
                    <h1 className="secondary">
                        Built using ReactJS on the front-end and NodeJS on the back-end in conjunction with AirtimePro’s API for audio streaming to broadcast the shows live.
                    </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cipher" />
                </div>
            </div>

        </Page>
    );
};

export default Cipher;