import React from "react";
import Users from "./index";
import {connect} from "react-redux";
import {followAC, unFollowAC, setUsersAC} from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer