import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Reducer/LoginReducer';
import DetailPageReducer from '../Redux/Reducer/DetailPageReducer';
import reducer from './Reducer/reducer';

const store = configureStore({
  reducer: {
    Login: LoginReducer,
    detailPage: DetailPageReducer,
    products: reducer
  }
});

export default store;
