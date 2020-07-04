import { put, delay } from 'redux-saga/effects';
import productApi from '../../api/axiosProduct';
import * as actions from '../actions/index';

export function* productSaga(action) {
    try{

        console.log("ok")
        const res = yield productApi.getAll();
        console.log(res)
    }   
    catch(error) {
        console.log(error)
    }
    

}