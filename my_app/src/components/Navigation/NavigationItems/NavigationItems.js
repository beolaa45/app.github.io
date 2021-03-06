import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem exact link='/'>Burger Builder</NavigationItem>
       {props.isAuthenticated ?  <NavigationItem link='/order'>Orders</NavigationItem> : null}
        {props.isAuthenticated ?
            <NavigationItem link='/logout'>Logout</NavigationItem>
            :<NavigationItem link='/auth'>Authenticate</NavigationItem>}
    </ul>
)

export default navigationItems