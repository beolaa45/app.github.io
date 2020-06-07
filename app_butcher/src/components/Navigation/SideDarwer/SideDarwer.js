import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Navigations from '../Navigations/Navigations';
import './SideDarwer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDarwer = (props) => {

    
    return (

        <div>
            <Backdrop show={props.open} clicked={props.close} />
                <div className={props.open ? 'SideDrawer Open' : 'SideDrawer Close'}>
                    <div className='box-logo'>
                        <Logo />
                    </div>
                    <nav>
                        <Navigations />
                    </nav>
                </div>
            
        </div>
        
    );
};

export default sideDarwer;