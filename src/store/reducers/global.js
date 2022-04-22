import { LOGIN_SUCCESS } from '../actions/actionType'

const initialState = {
  isLogin: false,
}

const loginSuccess = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
      }
    default:
      return state
  }
}

export default loginSuccess
