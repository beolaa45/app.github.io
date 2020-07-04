import { takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import {authStartUserSaga, authCheckTimeoutSaga, authLogoutSaga} from './auth';
import { productSaga } from './product';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_START_USER, authStartUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITLOGOUT_USER, authLogoutSaga)
}

export function* watchProduct() {
    yield takeEvery(actionTypes.PRODUCT_START, productSaga)
}