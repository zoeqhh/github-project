import {REQUESTUSERSTORE_SUCCESS} from './actionType'
import {getUserStore} from '../../services'
// 定义action 返回 {type:xxx, msg}  
export const requestuserStoreSuccess=(username,storeArray)=>{
  // 定义请求成功状态 接受传入的参数并存入store
  return (dispatch)=>{
    dispatch({
      type:REQUESTUSERSTORE_SUCCESS,
      username,
      storeArray
    })
  }
}

export const requestuserStoreAction=(username)=>{
  // 处理 请求仓库信息的请求
  getUserStore(username)
    .then((res)=>{
      // 请求成功派发请求成功的action 并把用户名的参数传进去
      dispatch(requestuserStoreSuccess(username,res.data))
    })
    .catch(err=>{})
    .finally(() => {})
}
