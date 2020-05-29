import { put } from 'redux-saga/effects'
import axios from '../../axios-oriders';
import * as actions from '../actions/index';
export function* initIngredientsSaga(action) {
    try{
        const res = yield axios.get('https://my-app-e884b.firebaseio.com/ingredients.json')
       yield put(actions.setIngredients(res.data))
    }catch(error) {
       yield put(actions.fetchIngredientFailed())
    }      
   
}