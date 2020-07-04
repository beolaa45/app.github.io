import React from 'react';
import { NavLink } from 'react-router-dom'
const NavigationItem = (props) => {
    return (
        <li>
            <NavLink className="nav-link" 
                    activeClassName="activeRoute" 
                    exact={props.exact} to={props.link}>
                        {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;