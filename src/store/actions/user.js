import { REQUESTUSERSTORE_SUCCESS, REQUESTSTOREDETAIL_SUCCESS } from './actionType'
import { getUserStore, getStoreDetaiMsg } from '../../services'
import store from '../store'

export const requestuserStoreSuccess = (username, storeArray) => (dispatch) => {
  dispatch({
    type: REQUESTUSERSTORE_SUCCESS,
    username,
    storeArray,
  })
}

// 定义请求仓库具体数据的方法
export const requestStoreDetailSuccess = (storeDetailArray) => (dispatch) => {
  dispatch({
    type: REQUESTSTOREDETAIL_SUCCESS,
    storeDetailArray,
  })
}

// 定义获得仓库列表的行为
export const requestuserStoreAction = (username) => (dispatch) => {
  // 处理 请求仓库信息的请求
  getUserStore(username.username)
    .then((res) => {
      // 请求成功派发请求成功的action 并把用户名的参数传进去
      if (res.status === 200) {
        dispatch(requestuserStoreSuccess(username.username, res.data))
      }
    })
    .catch(() => {})
    .finally(() => {})
}

// 定义获得仓库具体信息的行为
export const requestStoreDetailAction = (storeFullName) => {
  // console.log('获得详情的路径', storeFullName)
  // 派发请求
  getStoreDetaiMsg(storeFullName)
    .then((res) => {
      // props.history.push({pathname:'/detail',state:{storeArray:res.data,storeName:item.name}})
      // console.log(res.data)
      store.dispatch(requestStoreDetailSuccess(res.data))
    })
}
