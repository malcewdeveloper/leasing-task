import React from "react";
import clsx from 'clsx';
import './Button.scss';


const Button = (props) => {
    const { color, children, disabled, loading } = props;

    const classString = clsx({
        'button_disable': disabled, 
        'button_loading': loading,
        'button_orange': color === 'orange'
    });

    return (
        <button className={`button ${classString}`} disabled>{ children }</button>
    )
}

export default Button;