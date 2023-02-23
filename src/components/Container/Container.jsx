import React from "react";
import './Container.scss';


export default function Container({ children, size }) {
    return (
        <div className="container">{ children }</div>
    )
}