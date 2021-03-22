import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeComponent = (props) => {
    return (
        <>
            <div className="code-highlighter">
                <SyntaxHighlighter language={props.language ? props.language : 'javascript'} style={a11yDark}>
                    {props.code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default CodeComponent
