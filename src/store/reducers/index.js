import { combineReducers } from 'redux'
import user from './user'
import global from './global'
// 暴露出合并后的reducres
export default combineReducers({
  user,
  global,
})
