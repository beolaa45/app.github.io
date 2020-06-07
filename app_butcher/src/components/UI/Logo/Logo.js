import React from 'react';
import logoBu from '../../../asset/img/logo-red.png';
import './Logo.scss'
const logo = (props) => {
    return (
        <div className='Logo'>
            <img src={logoBu} alt='Butcher'/>
        </div>
    );
        
        
};

export default logo;  