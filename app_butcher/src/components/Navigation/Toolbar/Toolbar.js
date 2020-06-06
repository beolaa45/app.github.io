import React from 'react';
import './Toolbar.scss'
import Navigation from '../Navigations/Navigations';
const toolbar = () => {
    return (
        <header className='Toolbar'>
            <div className='top-bar'></div>
            <div className='main-bar'>
               <div className='container'>
                    <Navigation />
                </div>               
            </div>

        </header>
    );
};

export default toolbar;