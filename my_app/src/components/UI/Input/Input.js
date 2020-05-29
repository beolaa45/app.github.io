import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case ('input'):
            inputElement = <input 
                            className='InputElement' 
                            {...props.elementConfig} 
                            value={props.value} onChange={props.change}/>
            break;
        case ('textarea'):
            inputElement = <textarea 
                            className='InputElement'
                            {...props.elementConfig} 
                            value={props.value} onChange={props.change}/>
            break;
            case ('select'):
            inputElement= (
                <select className='InputElement' value={props.value}>
                    {props.elementConfig.option.map(option => (
                        <option key={option.value} 
                        value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input  
                            className='InputElement'
                            {...props.elemmentConfig} 
                            value={props.value} onChange={props.change}/>
    }
    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;