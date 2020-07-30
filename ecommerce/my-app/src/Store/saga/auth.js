import { put, delay } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import env from 'dotenv';
env.config();


export function* authLogoutSaga(){
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("userId");
    yield localStorage.removeItem("expirationDate");
    yield put(actions.logoutSuccessUser())
}
export function* authCheckTimeoutSaga(action){
    console.log(action.expirationTime)
    yield delay(action.expirationTime * 20000);
    yield put(actions.initlogoutUser())
}

export function* authStartUserSaga(action) {
    yield put(actions.authInitUser());
     const authData = {
        name: action.name,
        email: action.email,
        password: action.password
    };
    

    let url = "/signup";
    console.log(action)
    const authDataSigin = {
        email: action.email,
        password: action.password
    }
    if(!action.isSignup){
        url = "/signin"
    }

    try{
        const res = yield axios.request({
            url: `${process.env.REACT_APP_API_URL}${url}`,
            method: "post",
            headers: {Accept: 'application/json',
                        "Content-Type": 'application/json'},
            data: action.isSignup ? authData : authDataSigin
        }); 
        
        const expirationDate = yield new Date().getTime() + res.data.user.expire;
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('token', res.data.token);
        yield localStorage.setItem('userId', res.data.user._id)
        yield put(actions.authSuccessUser(res.data.user.name, res.data.user.email, res.data.user._id, res.data.token, res.data.user.role));
        yield put(actions.checkAuthTimeout(res.data.user.expire))
    } catch(err) {
        console.log({...err})
        yield put(actions.authFailUser(err.response.data))
    }
}