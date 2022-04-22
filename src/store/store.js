import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 引入所有的reducer
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))
// reducer纯函数
export default store
