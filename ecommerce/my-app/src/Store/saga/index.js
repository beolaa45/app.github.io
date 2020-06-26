import { takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import {authStartUserSaga, authCheckTimeoutSaga} from './auth'
export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_START_USER, authStartUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga);
    
}