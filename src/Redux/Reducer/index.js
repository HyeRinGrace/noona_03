import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import reducer from './reducer';

export default combineReducers({
    product: reducer,
    Login: LoginReducer,
})