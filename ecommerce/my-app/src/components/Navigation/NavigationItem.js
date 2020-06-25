import React from 'react';
import { NavLink } from 'react-router-dom'
const NavigationItem = (props) => {
    return (
        <li>
            <NavLink exact={props.exact} to={props.link}>{props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;