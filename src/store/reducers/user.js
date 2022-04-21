// 引入type变量
import {REQUESTUSERSTORE_SUCCESS,REQUESTSTOREDETAIL_SUCCESS} from '../actions/actionType'

// 初始化用户信息以及处理store中的用户信息  
const initialState ={ 
  username:'',
  storeArray:[],
  storeDetailArray:[]
}

// 处理store中用户的数据  一个函数 接收初始state和action       处理状态
const user= (state=initialState,action) =>{
  // 匹配action 进行处理
  switch (action.type){
    case REQUESTUSERSTORE_SUCCESS:
      console.log("reducer中的storeArray",action.storeArray);
      return {
        ...state,
        // 将action中传入的用户名信息 对store中的用户名以及storeArray进行修改进行更改
        username:[...action.username],
        storeArray:[...action.storeArray]
      }
    case REQUESTSTOREDETAIL_SUCCESS:
      return {
        ...state,
        // username:[...action.username],
        storeDetailArray:[...action.storeDetailArray]
      }
    default:
      return state
  }
}

export default user