import React from "react";
import './Title.scss';


const Title = ({ type, children }) => {
    return (
        React.createElement(type, {className: `title-${type}`}, children)
    )
}

export default Title;