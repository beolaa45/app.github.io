import React from 'react';
import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userlId')
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT,

    }
}

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime) => {
 return {
     type: actionTypes.AUTH_CHECK_TIMEOUT,
     expirationTime: expirationTime
 }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
 return {
     type: actionTypes.AUTH_CHECK_STATE
 }
}

export const auth = (email, password, isSignup) => {

    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    }
    // return dispatch => {
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     }
    //     let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
    //     if(!isSignup){
    //         url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
    //     }
    //     dispatch(authStart())
    //     axios.post(url, authData)
    //     .then(res => {
    //         console.log(res);
    //         const expirationDate = new Date( new Date().getTime() + res.data.expiresIn);
    //         window.localStorage.setItem('expirationDate', expirationDate);
    //         localStorage.setItem('token', res.data.idToken);
    //         localStorage.setItem('userlId', res.data.localId)
    //         dispatch(authSuccess(res.data.idToken, res.data.localId));
    //         dispatch(checkAuthTimeout(res.data.expiresIn))
    //     })
    //     .catch(error => {
           
    //         dispatch(authFail(error.response.data.error))
    //     })
    // }
}



