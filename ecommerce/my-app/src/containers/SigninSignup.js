import React, { Fragment } from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const SigninSignup = (props) => {


    return (
        <Fragment>
        {props.isAuth ? <Redirect to="/" /> : null}
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Signup />
                </div>
                <div className='col-6'>
                    <Signin />
                </div>
            </div>
        </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    }
}
export default connect(mapStateToProps)(SigninSignup);