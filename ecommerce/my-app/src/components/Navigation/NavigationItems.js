import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul>
            <NavigationItem exact link='/'>Home</NavigationItem>
            <NavigationItem exact link='/shop'>Shop</NavigationItem>
            <NavigationItem exact link='/blog'>Blog</NavigationItem>
            <NavigationItem exact link='/contac'>Contac</NavigationItem>
        </ul>
    );
};

export default NavigationItems;