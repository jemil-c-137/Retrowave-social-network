import React from "react";
import {connect} from "react-redux";


import Users from "./Users";
import Preloader from "../common/Preloader";
import {
  followThunk,
  followUser, getUsersThunkCreator,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingProgress,
  toggleIsFetching,
  unFollow, unFollowThunk,
} from "../../Redux/users-reducer";
import {withAuthRedirect} from "../hoc/authRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers, getUsersSelector
} from "../../Redux/usersSelectors";



class UsersAPIComponent extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }

  onPageChanged = (p) => {
  this.props.getUsersThunkCreator(p, this.props.pageSize)

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
               usersInProgress={this.props.usersInProgress}
                followThunk={this.props.followThunk}
               unFollowThunk={this.props.unFollowThunk}
               followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}


let mapDispatchToProps = {
  followUser, unFollow, setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
 followThunk,
 unFollowThunk,

}
export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent))

