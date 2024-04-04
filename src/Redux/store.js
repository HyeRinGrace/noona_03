import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Slicers/LoginReducer';
import reducer from './Slicers/reducer';

const store = configureStore({
  reducer: {
    Login: LoginReducer,
    products: reducer
  }
});

export default store;
