import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';

const HeaderMain = props => {
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'><NavLink to='/'><Logo /></NavLink></div>
                    <div className='col'>
                        <NavLink exact to='/siginsignup'>Login/Register</NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

HeaderMain.propTypes = {
    
};

export default HeaderMain;