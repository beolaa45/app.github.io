import React from 'react';
import * as actionTypes from './actionTypes';
import axios from 'axios'; 

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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userlId')
    return {
        type: actionTypes.AUTH_LOGOUT,

    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
           dispatch(logout())
        },expirationTime * 1000)
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else {
            const expirationDate = new Date(window.localStorage.getItem('expirationDate'));
            console.log(expirationDate.getDay())
            if(expirationDate <= new Date()){
                dispatch(logout())
            }else {
                const userlId = localStorage.getItem('userlId')
                dispatch(authSuccess(token, userlId));
                // dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()))
            }
        }
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
        if(!isSignup){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
        }
        dispatch(authStart())
        axios.post(url, authData)
        .then(res => {
            console.log(res);
            const expirationDate = new Date( new Date().getTime() + res.data.expiresIn);
            window.localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userlId', res.data.localId)
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(checkAuthTimeout(res.data.expiresIn))
        })
        .catch(error => {
           
            dispatch(authFail(error.response.data.error))
        })
    }
}



