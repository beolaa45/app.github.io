import {put} from 'redux-saga/effects';
import axios from '../../axios-oriders';
import * as actions from '../actions/index';

export function* purchaseBurgerStartSaga(action) {
    yield put(actions.purchaseBurgerLoading());
    try {
        const res = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(res.data.name, action.orderData))
    } catch(error) {
        yield put(actions.purchaseBurgerFail(error))
    }   
   
}


export function* fetchOrdersSaga(action){
     yield put(actions.fetchOrderStart())
     const queryParams = yield '?auth=' + action.token + '&orderBy="userId"&equalTo"' + action.userId + '"';
     try {
  const res = yield axios.get('/orders.json' + queryParams);
       const fetcheOrders = yield [];
       for(let key in res.data){
        fetcheOrders.push({
            ...res.data[key],
            id: key
        })
    };
    yield put(actions.fetchOrderSuccess(fetcheOrders))
     } catch (error) {
      yield put(actions.fetchOrderFail(error))
     }

}