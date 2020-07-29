import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/index';
import PropTypes from "prop-types";

const Logout = (props) => {
    
    useEffect(() => {
        props.onLogout()
    }, [])
    return (
        <div>
            <Redirect to="/" />
        </div>
    );
};
const mapDispacthToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.initlogoutUser())
    }
}
export default connect(null, mapDispacthToProps)(Logout);

Logout.propTypes = {
    onLogout: PropTypes.func
}