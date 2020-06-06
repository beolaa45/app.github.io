import React, {useState} from 'react';

import './Button.scss'
const Button = (props) => {
    
    const btn = ['Button'];
    console.log(props)
    if(props) {
        for(const key in props){
            if(props[key] === props.children){
                
                continue;
                
            }else {
                btn.push(props[key])
            }
            
        }
    }
    return (
    <button onClick={props.clicked} className={btn.join(' ')}>{props.children}</button>
    );
};

export default Button;

