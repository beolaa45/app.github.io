import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from '../style/Navigation/NavigationItem';
const NavigationItem = (props) => {
    return (
        <Item>
            <NavLink className="nav-link" 
                    activeClassName="activeRoute" 
                    exact={props.exact} to={props.link}>
                        {props.children}
            </NavLink>
        </Item>
    );
};

export default NavigationItem;