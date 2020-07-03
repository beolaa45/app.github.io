import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import HeaderMai from '../style/Header/HeaderMain';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import Search from '../Search';
import {Col, Row} from "reactstrap"
const HeaderMain = props => {
    const [active, setActive] = useState(false)

    const userSelect = () => {
        setActive(!active)
    }
    return (
       <HeaderMai>
            <div className='container-main'>
                <Row className='row'>
                    <Col xs="auto">
                        <NavLink exact to='/'><Logo /></NavLink>
                    </Col >
                    <Col >
                        <Search />
                    </Col>
                    <Col >
                       {props.isAuth ? <div className="user-icon" onClick={userSelect}><PermIdentityIcon style={{ fontSize: 40 }}/>
                                <div className={active ? "active user-box" : "user-box"}>
                                    <NavLink exact to='/user'>User</NavLink>
                                    <NavLink exact to='/logout'>Logout</NavLink>
                                </div>
                       </div>
                        : <NavLink exact to='/siginsignup'>Login/Register</NavLink>}
                    </Col>
                </Row>
            </div>
        </HeaderMai>
        
    );
};

HeaderMain.propTypes = {
    isAuth: PropTypes.bool
};



export default HeaderMain;