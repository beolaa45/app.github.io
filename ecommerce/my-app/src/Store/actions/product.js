import * as actionTypes from './actionsTypes';

export const productStart = (param) => {
  return  {
      type: actionTypes.PRODUCT_START
      // sortBy: param.sortBy,
      // order: param.order,
      // limit: param.limit
  }
}