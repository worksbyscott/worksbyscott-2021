import React from "react";
import CodeComponent from "../../components/codeComponent";
import { footerAction as FooterAction } from "../../components/footerAction";

import Page from '../../components/page'
import PageTitle from '../../components/pagetitle'
import ProjectImage from '../../components/projectImage'

const codeExample = `
prism(“.prism-test”, {
    translateX: 1000
    duration: 2000
})
`

const codeExample2 = `
<PrismComponent
    animation={{
        duration: 2000,
        easing: “easeOutCubic”,
        fontSize: “50px”,
        opacity: 1
    }}>
    <h1>Hello World</h1>
</PrismComponent>
`

const Prism = () => {
    return (
        <Page>
            <PageTitle
                headline="Prism Animation Library"
                subhead="Development, Publishing"
                url="https://prism.worksbyscott.uk/"
                action="View Documentation"
                key={"pageTitle"}
            />
            <div className="project">
                <div className="row">
                    <ProjectImage source="prism" />
                </div>
                <div className="row">
                    <h1 className="primary">Prism is an lightweight yet powerful Javascript library created for React To allow developers to produce tween animations on elements with any CSS and transform value.</h1>
                </div>
                <div className="row">
                    <CodeComponent code={codeExample} />
                </div>
                <div className="row">
                    <h1 className="secondary">One function that’s it. Simple isn’t it!</h1>
                </div>
                <div className="row">
                    <CodeComponent code={codeExample2} language="jsx" />
                </div>
                <div className="row">
                    <h1 className="secondary">Prism also takes advantage of reacts use of JXS to provide an PrismComponent and inline Component version of the Prism Function.</h1>
                </div>
            </div>

            <FooterAction
                label="More Information"
                title="Download Prism Animation on NPM"
                action="View Documentation"
                url="https://prism.worksbyscott.uk/" />

        </Page>
    );
};

export default Prism;