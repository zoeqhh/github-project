// 利用createStore方法创建store  并且把reducers交给store管理
// 引入createStore
import { createStore } from 'redux'
// 引入reducers  
import rootReducers from './reducers '

// 管理reducers
export default createStore(rootReducers)
