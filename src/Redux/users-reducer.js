import {usersAPI} from "../api/api";
import {updateUsersArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";
const HANDLE_FOLLOW = 'HANDLE_FOLLOW';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 20,
  currentPage: 3,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  // actions for dispatch
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateUsersArray(state.users, action.userId, 'id', {followed: true})
        /*users: state.users.map(user => { // copy only user need to change
          if (user.id === action.userId) {
            return {...user, followed: true} // changing user state
          }
          return user
        })*/
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
       users: updateUsersArray(state.users, action.userId, 'id', {followed: false})
        /*users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })*/
      }
    }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.page}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.usersCount}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)

      }

    }
    default:
      return state
  }
}


// Action creators
export const handleFollowingAC = (userId, handler) => ({type: HANDLE_FOLLOW, userId, handler})
export const followUser = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId})
// Thunks
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  console.log(currentPage)
  const response = await usersAPI.getUsers(currentPage, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(setUsers(response.items))
  dispatch(setTotalUsersCount(response.totalCount))
  dispatch(setCurrentPage(currentPage))
}



const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}


export const followThunk = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.followAPI.bind(usersAPI), followUser)
}

export const unFollowThunk = userId => async dispatch => (followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI.bind(usersAPI), unFollow))




export default usersReducer