import React from 'react';
import NavigationItem from './NavigationItem';
import Navlist from '../style/Navigation/NavigationItems';
const NavigationItems = (props) => {
    return (
        
        <Navlist>
            <ul>
            <NavigationItem exact link='/'>Home</NavigationItem>
            <NavigationItem exact link='/shop'>Shop</NavigationItem>
            <NavigationItem exact link='/blog'>Blog</NavigationItem>
            <NavigationItem exact link='/contac'>Contac</NavigationItem>
            </ul>
        </Navlist>
        
    );
};

export default NavigationItems;