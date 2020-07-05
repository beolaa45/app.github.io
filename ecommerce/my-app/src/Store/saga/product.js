import { put, delay } from 'redux-saga/effects';
import productApi from '../../api/axiosProduct';
import * as actions from '../actions/index';
require('dotenv').config()


export function* productSaga(action) {
    try{

        console.log("ok")
        console.log(process.env.REACT_APP_API_URL)
        const res = yield productApi.getAll(action.params);
        console.log(res)
    }   
    catch(error) {
        console.log(error)
    }
    

}



