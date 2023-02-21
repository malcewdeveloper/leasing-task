import React from "react";
import './Output.scss';


export default function Output(props) {
    const { title, value } = props;

    return (
        <div className="output">
            <div className="output__header">{ title }</div>
            <div className="output__info">{ value }</div>
        </div>
    )
}