import React from "react";
import './Textfield.scss';


export default function Textfiled(props) { 
    const { title, label, min, max, endAdornment, step, id, initialValue, onChange } = props; 
    const inputRef = React.createRef(); 
    const [value, setValue] = React.useState(initialValue); 

    React.useEffect(() => {
        const progress = (initialValue / max) * 100 + '%';
        inputRef.current.style.background = `linear-gradient(90deg, ${'#FF9514'} 0% ${ progress }, ${ 'transparent' } ${ progress } 100% )`;
    }, [])
 
    const handleChange = (event) => { 
        const value = event.target.value;
        const progress = (value / max) * 100 + '%';
        inputRef.current.style.background = `linear-gradient(90deg, ${'#FF9514'} 0% ${ progress }, ${ 'transparent' } ${ progress } 100% )`;
        setValue(value);
        if(onChange) {
            onChange(event);
        }
    }
 
    return ( 
        <div className="textfield"> 
            {title && <div className="textfield__title">{ title }</div>} 
            <div className="textfield__content">           
                <label className="textfield__label" htmlFor={ id }>{ label }</label> 
                <span className="textfiled__span">{ endAdornment }</span> 
                <input  
                className="textfield__input" 
                onChange={ handleChange } 
                type="text"
                value={ value }
                id={ id } />
                <input  
                className="textfield__range"  
                onChange={ handleChange } 
                type="range" 
                ref={inputRef} 
                min={ min }  
                max={ max }  
                step={ step }
                value={ value } /> 
            </div> 
        </div> 
    ) 
}