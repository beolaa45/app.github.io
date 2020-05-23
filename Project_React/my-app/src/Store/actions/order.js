import * as actionTypes from './actionTypes';
import axios from '../../axios-oriders';


 export const purchaseBurgerSuccess = (id, orderData) => {
     return {
         type: actionTypes.PURCHASE_BURGER_SUCCESS,
         orderData: orderData,
         orderId: id
     }
 }

 export const purchaseBurgerFail = error => {
     return {
         type: actionTypes.PURCHASE_BURGER_FAIL,
         error: error
         
     }
 }

 export const purchaseBurgerLoading = () => {
     return {
         type: actionTypes.PURCHASE_BURGER_START
     }
 }
 
 export const purchaseInit = () => {
     return {
         type: actionTypes.PURCHASE_INIT
     }
 }
 export const purchaseBurgerStart = (orderData, token) => {
     return dispatch => {
         dispatch(purchaseBurgerLoading());
        
          axios.post('/orders.json?auth=' + token, orderData)
        .then(res => {
           dispatch(purchaseBurgerSuccess(res.data.name,orderData))
        })
        .catch(error => {
         dispatch(purchaseBurgerFail(error))
        });
   
     }
 }


 export const fetchOrderSuccess = (orders) => {
     return {
         type: actionTypes.FETCH_ORDERS_SUCCESS,
         orders: orders
     }
 }

 export const fetchOrderFail = (error) => {
     return {
         type: actionTypes.FETCH_ORDERS_FAIL,
         error: error 
     }
 }

 export const fetchOrderStart = () => {
     return  {
         type: actionTypes.FETCH_ORDERS_START,

     }
 }

 export const fetchOrders = (token, userId) => {
     return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo"' + userId + '"';
        axios.get('/orders.json' + queryParams)
        .then(res => {
            const fetcheOrders = [];
            for(let key in res.data){
                fetcheOrders.push({
                    ...res.data[key],
                    id: key
                })
            };
           dispatch(fetchOrderSuccess(fetcheOrders))
        })
        .catch(error => {
            dispatch(fetchOrderFail(error))
        })
 }
}