import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../actions/utility';
const initalSate = {
    userName: null,
    userEmail: null,
    token: null,
    userId: null, 
    role: null,
    error: null,
    loading: false,

}

const authInitUser = (state, action) => {
  return  updateObject(state, {token: null, userId: null, loading: true, userName: null, userEmail: null, userId: null, error: null, role: null});
}
const authSuccessUser = (state, action) => {
   return updateObject(state, {token: action.token, userId: action.userId, 
                                userName: action.name,
                                userEmail: action.email,
                                role: action.role,
                                loading: false,
                                error: null})
}

const authLogoutUser = (state, action) => {
  return  updateObject(state, {token: null, userId: null, loading: false, userName: null, userEmail: null, userId: null, error: null, role: null});
}

const authFailtUser = (state, action) => {
   return updateObject(state, {error: action.error.error, loading: false});
}

const reducer = (state = initalSate, action) => {
    switch (action.type) {
        case actionTypes.AUTH_INIT_USER:
            return authInitUser(state, action)
        case actionTypes.AUTH_SUCCESS_USER:
            return authSuccessUser(state, action)
        case actionTypes.AUTH_LOGOUTSUCCESS_USER:
            return authLogoutUser(state, action)
        case actionTypes.AUTH_FAIL_USER:
            return authFailtUser(state, action)
        default:
            return state
    }
}

export default reducer;