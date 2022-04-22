import { LOGIN_SUCCESS } from './actionType'

export const loginSuccess = (login) => ({
  type: LOGIN_SUCCESS,
  isLogin: login,
})
