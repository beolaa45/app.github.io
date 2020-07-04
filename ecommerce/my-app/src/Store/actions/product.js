import * as actionTypes from './actionsTypes';

export const productStart = (param) => {
  return  {
      sortBy: param.sortBy,
      order: param.order,
      limit: param.limit
  }
}