const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users:  [

  ]
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
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
}


// Action creators
export const followAC = (userId) => { return {type: FOLLOW, userId}}

export const unFollowAC = (userId) => { return {type: UNFOLLOW, userId}}
export const setUsersAC = (users) => { return {type: SET_USERS, users}}

export default usersReducer