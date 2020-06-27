import * as actionTypes from './actionsTypes'

export const authInitUser = () => {
    return {
        type: actionTypes.AUTH_INIT_USER
    }
}

export const authStartUser = (name, email, password, isSignup) => {

    return {
        type: actionTypes.AUTH_START_USER,
        name: name,
        email: email,
        password: password,
        isSignup: isSignup
    }
}


export const authSuccessUser = (name, email, userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS_USER,
        name,
        email,
        token,
        userId
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
   }

export const initlogoutUser = () => {
    return {
        type: actionTypes.AUTH_INITLOGOUT_USER
    }
}

export const logoutSuccessUser = () => {
    return {
        type: actionTypes.AUTH_LOGOUTSUCCESS_USER
    }
}


export const authFailUser = (fail) => {
    return {
        type: actionTypes.AUTH_FAIL_USER,
        error: fail
    }
}