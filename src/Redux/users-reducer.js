const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users:  [ ],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 3,
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

    default:
      return state
  }
}


// Action creators
export const followAC = (userId) => { return {type: FOLLOW, userId}}
export const unFollowAC = (userId) => { return {type: UNFOLLOW, userId}}
export const setUsersAC = (users) => { return {type: SET_USERS, users}}
export const setCurrentPageAC = (page) => {return {type: SET_CURRENT_PAGE, page}}
export const setTotalUsersCountAC = (usersCount) => {return {type: SET_TOTAL_USERS_COUNT, usersCount}}
export default usersReducer