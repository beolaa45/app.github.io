import { compose, createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './auth'
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer
})
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null|| compose;
//init Store anh middleware
const store = createStore(rootReducer, (applyMiddleware(sagaMiddleware)));
export default store
