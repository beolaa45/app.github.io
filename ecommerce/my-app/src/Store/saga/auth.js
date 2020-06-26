import { put, delay } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import env from 'dotenv';
env.config();

export function* authCheckTimeoutSaga(action){
    yield delay(action.expirationTime);
    yield put(actions.logoutUser())
}

export function* authStartUserSaga(action) {
    yield put(actions.authInitUser());
     const authData = {
        name: action.name,
        email: action.email,
        password: action.password
    }

    let url = "/signup"
    if(!action.isSignup){
        url = "/signin";
        authData = {
            email: action.email,
            password: action.password
        }
    }

    try{
        const res = yield axios.request({
            url: `${process.env.REACT_APP_API_URL}${url}`,
            method: 'post',
            headers: {Accept: 'application/json',
                        "Content-Type": 'application/json'},
            data: authData
        }); 
        console.log(res)

        const expirationDate = yield new Date().getTime() + res.data.user.expire;
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('token', res.data.token);
        yield localStorage.setItem('userId', res.data.user._id)
        yield put(actions.authSuccessUser(res.data.user.name, res.data.user.email, res.data.user._id, res.data.token));
        yield put(actions.checkAuthTimeout(res.data.user.expire))
    } catch(err) {
        console.log({...err})
        yield put(actions.authFailUser(err.response.data))
    }
}