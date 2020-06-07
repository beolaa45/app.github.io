import React from 'react';
import './Navigation.scss'
const navigation = (props) => {
    return (
    <li className='Navigation'><a href={props.link} className={props.active ? 'active' : null}>{props.item}</a></li>
    );
};

export default navigation;