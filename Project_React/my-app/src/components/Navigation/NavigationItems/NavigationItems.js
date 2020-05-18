import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem exact link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/order'>Orders</NavigationItem>
    </ul>
)

export default navigationItems