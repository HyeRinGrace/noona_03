import { createStore,applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './Reducer/index'
// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;