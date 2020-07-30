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

  // actions for dispatch
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



// Action creators
export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthThunk = () => {


  return (dispatch) => {

   authApi.me().then(response => {

      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, email, login, true))
      }
    })
  }
}

export const login = (login, password, rememberMe) => (dispatch) => {
   authApi.logIn(login, password, rememberMe).then(response => {
     debugger;
      if (response.data.resultCode === 0) {
        dispatch(getAuthThunk())
      } else {
        // error handling
        debugger;
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error' ; //getting server error message
        dispatch(stopSubmit('login', {_error: errorMessage}))
      }
    })

}

export const logoutUser = () => (dispatch) => {
    authApi.logOut().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    })
}


export default authReducer
