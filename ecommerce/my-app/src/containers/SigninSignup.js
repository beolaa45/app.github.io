import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
const SigninSignup = () => {
    return (
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
    );
};

export default SigninSignup;