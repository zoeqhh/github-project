// // 利用createStore方法创建store  并且把reducers交给store管理
// // 引入createStore
// import {legacy_createStore as createStore} from 'redux'
// // 引入reducers  
// import rootReducers from './reducers/index'

// // 管理reducers
// export default createStore(rootReducers)

import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// 引入所有的reducer
import rootReducer from './reducers'
import thunk from 'redux-thunk'
let store = createStore(rootReducer,applyMiddleware(thunk))
// reducer纯函数
export default store
