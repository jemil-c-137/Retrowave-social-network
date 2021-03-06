import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE ="SET_USER_PROFILE";
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_NEW_STATUS = 'SET_NEW_STATUS';
const DELETE_POST = 'DELETE_POST';

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
  newPostText: "",
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {

      let newPost = {
        id: 5,
        text: action.newPostText,
        value: 2
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }

    }
   /*
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }

    }*/
    case SET_USER_PROFILE: {
      return  {...state, profile: action.profile}
    }
    case SET_USER_STATUS: {
      return {...state, status: action.userId}
    }
    case SET_NEW_STATUS: {
      return {...state, status: action.status}
    }
    case DELETE_POST: {
      return {...state, postsData: state.postsData.map(p => p.id !== action.postId)}
    }
    default:
      return state
  }
}

export const addPostActionCreator = (text) => ( {type: ADD_POST, newPostText: text} )

export const updateNewAreaTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )
export const setUserProfile = (profile) => (  {type: SET_USER_PROFILE, profile } )
export const setUserStatus = (userId) => ( {type: SET_USER_STATUS, userId} )
export const setNewUserStatus = (status) => ( {type: SET_NEW_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

//thunks
export const setUserProfileThunk = (profile) => async (dispatch) => {
   const response = await profileAPI.setUser(profile)
      dispatch(setUserProfile(response.data))
}

export const getUserStatusThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
      dispatch(setUserStatus(response.data))
}

export const updateUserStatusThunk = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0) {
        dispatch(setNewUserStatus(status))
        return
      } alert("Update Status Error")
}

export default profileReducer