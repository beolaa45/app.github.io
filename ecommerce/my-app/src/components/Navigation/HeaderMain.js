import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import HeaderMai from '../style/Header/HeaderMain';
const HeaderMain = props => {
    return (
        <HeaderMai>
            <div className='container'>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'><NavLink exact to='/'><Logo /></NavLink></div>
                    <div className='col'>
                       {props.isAuth ? <NavLink exact to='/logout'>Logout</NavLink>
                        : <NavLink exact to='/siginsignup'>Login/Register</NavLink>}
                    </div>
                </div>
            </div>
        </HeaderMai>
    );
};

HeaderMain.propTypes = {
    isAuth: PropTypes.bool
};

HeaderMain.defaultProps = {
    isAuth: false
}

export default HeaderMain;