import {getAuth} from "../api/api";


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
        isAuth: true
      }
    }
    default:
      return state
  }
}


// Action creators
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthThunk = () => {
  return (dispatch) => {

    getAuth().then(response => {
      if (response.data.resultCode === 0) {
        let {userId, login, email} = response.data.data;
        dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login))
      }
    })
  }
}
export default authReducer