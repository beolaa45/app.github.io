import React from 'react';
import './Toolbar.scss'
import Navigation from '../Navigations/Navigations';
import Logo from '../../UI/Logo/Logo';
const toolbar = () => {
    return (
        <header className='Toolbar'>
            <div className='top-bar'></div>
            <div className='main-bar'>
               <div className='container'>
                    <div className='row main-bar__box'>
                        
                            <div className='col-md-2 col-sm-2 '>
                                <div className='logo'>
                                    <Logo />
                                </div>
                               
                            </div>
                            <div className='col-md-10 col-sm-10 d-flex justify-content-end align-items-center main-bar__nav'>
                                <nav>
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