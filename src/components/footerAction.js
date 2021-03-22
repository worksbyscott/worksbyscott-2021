import React from 'react';
import { Link } from 'react-router-dom'

export const footerAction = (props) => {
    return (
        <div className="footer-action">
            <div className="label">
                <h3>{props.label}</h3>
            </div>
            <h1>{props.title}</h1>
            <div className="action">

                {props.url &&
                    <a href={props.url}>
                        {props.action}   →
                    </a>
                }
            </div>
        </div>
    )
}
