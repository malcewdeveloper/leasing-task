import React from "react";
import 'Textfiled.scss';


export default function Textfiled(props) {
    const { title, label, min, max, endAdornment, step, id, initialValue } = props;

    handleChange = (e) => {

    }

    return (
        <div className="textfield">
            {title && <div className="textfield__title">{ title }</div>}
            <div className="textfield__content">          
                <label className="textfield__label" for={ id }>{ label }</label>
                <span className="textfiled__span">{ endAdornment }</span>
                <input className="textfield__input" value={ initialValue } id={ id } type="text" />
                <input className="textfield__range" type="range" min={ min } max={ max } step={ step } />
            </div>
        </div>
    )
}