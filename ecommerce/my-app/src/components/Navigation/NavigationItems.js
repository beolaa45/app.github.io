import React from 'react';
import NavigationItem from './NavigationItem';
import Navlist from '../style/Navigation/NavigationItem';
const NavigationItems = (props) => {
    return (
        <Navlist>
            <NavigationItem exact link='/'>Home</NavigationItem>
            <NavigationItem exact link='/shop'>Shop</NavigationItem>
            <NavigationItem exact link='/blog'>Blog</NavigationItem>
            <NavigationItem exact link='/contac'>Contac</NavigationItem>
        </Navlist>
    );
};

export default NavigationItems;