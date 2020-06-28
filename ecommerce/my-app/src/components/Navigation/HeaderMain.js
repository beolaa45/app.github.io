import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import HeaderMai from '../style/Header/HeaderMain';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const HeaderMain = props => {
    const [active, setActive] = useState(false)

    const userSelect = () => {
        setActive(!active)
    }
    return (
       
            <HeaderMai className='container'>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'><NavLink exact to='/'><Logo /></NavLink></div>
                    <div className='col'>
                       {props.isAuth ? <div className="user-icon" onClick={userSelect}><PermIdentityIcon style={{ fontSize: 40 }}/>
                                <div className={active ? "active user-box" : "user-box"}>
                                    <NavLink exact to='/user'>User</NavLink>
                                    <NavLink exact to='/logout'>Logout</NavLink>
                                </div>
                       </div>
                        : <NavLink exact to='/siginsignup'>Login/Register</NavLink>}
                    </div>
                </div>
            </HeaderMai>
        
    );
};

HeaderMain.propTypes = {
    isAuth: PropTypes.bool
};



export default HeaderMain;