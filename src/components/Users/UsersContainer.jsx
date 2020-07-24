import React from "react";
import {connect} from "react-redux";


import Users from "./Users";
import Preloader from "../common/Preloader";
import {
  followUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollow
} from "../../Redux/users-reducer";
import {getUsers} from "../../api/api";


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    debugger;
    if (this.props.users.length === 0) {

      getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        debugger;
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.items);
          this.props.setTotalUsersCount(response.totalCount)
        })
    }

  }

  onPageChanged = (p) => {

    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true)
    getUsers(p, this.props.pageSize).then(response => {
      debugger
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items)
      })
  }

  render() {


    return (
      <>
        {this.props.isFetching ?
          <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unFollow={this.props.unFollow}
               followUser={this.props.followUser}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}


let mapDispatchToProps = {
  followUser, unFollow, setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer