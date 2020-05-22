import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerTToggle from '../SideDrawer/DrawerToggle/DrawerToggele';
const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerTToggle clicked={props.clicked}>MENU</DrawerTToggle>
        <div className='LogoToobar'>
        <Logo />
        </div>
        
        <nav className='OnlyMobile'>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;