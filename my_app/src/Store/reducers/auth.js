import * as actionTypes from '../actions/actionTypes';
import  { updateObject }  from '../actions/utility';

const initalState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    } )
}

const authLogout = (state, action) => {
    return updateObject(state, {token: null, userId: null})
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path})
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {
                token: action.token,
                userId: action.userId,
                error: null,
                loading: false
            });
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
        default:
            return state
            
    }
}

export default reducer;
