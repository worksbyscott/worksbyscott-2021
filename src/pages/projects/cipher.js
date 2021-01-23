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
                        Turbo Ciphers is an encoded messenger allowing users to select traditional word ciphers to encode their messages with keywords. The aim was to create a fully private messaging service.                     </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cipher2" />
                </div>
                <div className="row">
                    <h1 className="secondary">
                        This project was testing myself to produce an SPA using only NodeJ, JQuery and minimal external Javascript libraries and frameworks. After completion I have been recreating this application in production value in React, Framer, Node and MongoDB.                    </h1>
                </div>
                <div className="row">
                    <ProjectImage source="cipher3" />
                </div>
            </div>

        </Page>
    );
};

export default Cipher;