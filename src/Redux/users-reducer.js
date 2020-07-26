import {APIfollow, APIgetUsers, APIunfollow} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"

let initialState = {
  users:  [ ],
  pageSize: 5,
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
        ...state, // copy state
        users: state.users.map( user => { // copy only user need to change
          if (user.id === action.userId) {
            return {...user, followed: true} // changing user state
          }
          return user
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
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
          : state.followingInProgress.filter(id => id != action.userId)

      }

    }
    default:
      return state
  }
}


// Action creators
export const followUser = (userId) => { return {type: FOLLOW, userId}}
export const unFollow = (userId) => { return {type: UNFOLLOW, userId}}
export const setUsers = (users) => { return {type: SET_USERS, users}}
export const setCurrentPage = (page) => {return {type: SET_CURRENT_PAGE, page}}
export const setTotalUsersCount = (usersCount) => {return {type: SET_TOTAL_USERS_COUNT, usersCount}}
export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}
export const toggleFollowingProgress = (isFetching, userId) => { return {type: TOGGLE_IS_FOLLOWING, isFetching, userId}}

export const getUsersThunkCreator = (currentPage, pageSize) => {

  return (dispatch) => {
    dispatch(toggleIsFetching(true))

    APIgetUsers(currentPage, pageSize).then(response => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(response.items))
      dispatch(setTotalUsersCount(response.totalCount))
    })
  }

}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    APIfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followUser(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export const unFollowThunk = (userId) => {

  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId))
    APIunfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unFollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export default usersReducer