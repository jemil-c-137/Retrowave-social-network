import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {

      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth
      }
    }
    default:
      return state
  }
}

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {userId, email, login, isAuth}
})
export const getAuthThunk = () => async (dispatch) => {
  const response = (await authApi.me()).data
  if (response.resultCode === 0) {
    let {id, login, email} = response.data;
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
  const response = (await authApi.logIn(login, password, rememberMe)).data
  if (response.resultCode === 0) {
    dispatch(getAuthThunk())
  } else {
    let errorMessage = response.messages.length > 0 ? response.messages[0] : 'Some error'; //getting server error message
    dispatch(stopSubmit('login', {_error: errorMessage}))
  }

}
export const logoutUser = () => async (dispatch) => {
  let response =( await authApi.logOut()).data
  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}
export default authReducer
