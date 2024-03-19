import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import reducer from './reducer';
import DetailPageReducer from './DetailPageReducer';

export default combineReducers({
    product: reducer,
    Login: LoginReducer,
    // productDetail:DetailPageReducer
})