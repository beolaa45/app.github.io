import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='\' active>Burger Builder</NavigationItem>
        <NavigationItem link='\' active>Cheackout</NavigationItem>
    </ul>
)

export default navigationItems