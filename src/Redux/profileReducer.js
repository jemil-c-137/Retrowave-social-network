import {APIsetUserProfile} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_AREA_TEXT = "UPDATE-NEW-AREA-TEXT";
const SET_USER_PROFILE ="SET_USER_PROFILE";

let initialState = {

  postsData: [
    {id:1, text: "Hello", value: 23},
    {id:2, text: "Ooweee", value: 43},
    {id:3, text: "Pickle rick", value: 13},
    {id:4, text: "Peace among the worlds", value: 42},
    {id:5, text: "Show me what you got", value: 666},
    {id:6, text: "Bye", value: 1984},
    {id:6, text: "Bye", value: 1984},
    {id:6, text: "Bye", value: 1984}
  ],
  newAreaText: "",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.newAreaText,
        value: 2
      }
      let stateCopy = {...state};
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newAreaText = '';
      return stateCopy
    }
    case UPDATE_NEW_AREA_TEXT: {
      let stateCopy = {...state}
      stateCopy.newAreaText = action.newSymbol;
      return stateCopy
    }
    case SET_USER_PROFILE: {
      return  {...state, profile: action.profile}
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewAreaTextActionCreator = (text) => ( {type: UPDATE_NEW_AREA_TEXT, newSymbol: text} )
export const setUserProfile = (profile) => (  {type: SET_USER_PROFILE, profile } )

export const setUserProfileThunk = (profile) => {

  return (dispatch) => {

    APIsetUserProfile(profile).then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}

export default profileReducer