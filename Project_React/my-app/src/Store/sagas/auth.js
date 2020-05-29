
import { put, delay } from 'redux-saga/effects';
import axios from 'axios'; 

import * as actions from '../actions/index'

export function* logoutSaga(action) {
   yield localStorage.removeItem('token');
   yield localStorage.removeItem('expirationDate');
   yield localStorage.removeItem('userlId')
    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime *1000);
    yield put(actions.logout())
}

export function* authUserSaga(action) {
    yield put(actions.authStart())
    
        const authData = {
            email:action.email,
            password:action.password,
            returnSecureToken: true
        }
       let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
       if(!action.isSignup){
             url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI8h5oY2BW7L58ndDRlbNgWysKtaKmKvA";
        }
        try{
            const res =  yield axios.post(url, authData);

       
            const expirationDate = new Date( new Date().getTime() + res.data.expiresIn);
            yield localStorage.setItem('expirationDate', expirationDate);
            yield localStorage.setItem('token', res.data.idToken);
            yield localStorage.setItem('userlId', res.data.localId)
            yield put(actions.authSuccess(res.data.idToken, res.data.localId));
            yield put(actions.checkAuthTimeout(res.data.expiresIn))
        } catch(error) {
            yield put(actions.authFail(error.res.data.error))
        }
} 

export function* authCheckStateSaga() {
    const token = yield localStorage.getItem('token');
        if(!token){
           yield put(actions.logout());
         }else {
            const expirationDate = yield new Date(window.localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
               yield put(actions.logout())
            }else {
                const userlId = yield localStorage.getItem('userlId')
                yield put(actions.authSuccess(token, userlId));
                //yield put(actions.checkAuthTimeout(expirationDate.getTime() - new Date().getTime()))
           }
        }
    
}