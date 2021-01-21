import { getAuthThunk } from "./authReducer";

const GET_INITIALIZED = "GET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  // actions for dispatch
  switch (action.type) {
    case GET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

// Action creators
export const getInitializedAC = () => ({ type: GET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  let getAuthPromise = dispatch(getAuthThunk());
  Promise.all([getAuthPromise]).then(dispatch(getInitializedAC()));
};

/*



export const getAuthThunk = () => {
  debugger;

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
*/

export default appReducer;
