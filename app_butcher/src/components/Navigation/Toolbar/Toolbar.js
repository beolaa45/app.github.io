import React from 'react';
import './Toolbar.scss'
import Navigation from '../Navigations/Navigations';
import Logo from '../../UI/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <div className='top-bar'></div>
            <div className='main-bar'>
               <div className='container'>
                    <div className='row main-bar__box'>
                            <div className='col-1 icon' onClick={props.open}>
                                <FontAwesomeIcon onClick={props.clicked} icon={faBars} />
                            </div>
                            <div className='col-6 offset-2 col-md-2 offset-md-0 offset-sm-0 col-sm-2 '>
                                <div className='logo'>
                                    <Logo />
                                </div>
                               
                            </div>
                            <div className='col-md-10 col-sm-10 d-flex justify-content-end align-items-center main-bar__nav '>
                                <nav className='DesktopOnly'>
                                <Navigation />
                                </nav>
                                
                            </div>
                        
                       
                    </div>
                </div>               
            </div>

        </header>
    );
};

export default toolbar;