import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Navigations from '../Navigations/Navigations';
import './SideDarwer.scss';

const sideDarwer = () => {
    return (
        <div className='SideDrawer'>

            <div className='box-logo'>
            <Logo />
            </div>
            
            
            <nav>
                <Navigations />
            </nav>
        </div>
    );
};

export default sideDarwer;