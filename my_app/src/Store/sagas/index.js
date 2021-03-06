import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerbuilder';
import { purchaseBurgerStartSaga, fetchOrdersSaga } from './order';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
   
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENT, initIngredientsSaga)
}

export function* watcOrder() {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerStartSaga)
    yield takeEvery(actionTypes.FETCH_ORDERS_INIT, fetchOrdersSaga)
}