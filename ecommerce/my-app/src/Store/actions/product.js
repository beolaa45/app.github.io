import * as actionTypes from './actionsTypes';

export const productStart = (param) => {
  return  {
      type: actionTypes.PRODUCT_START,
      params: param
  }
}