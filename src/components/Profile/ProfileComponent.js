import React from "react";
import {connect} from "react-redux";
import Profile from "./index";

import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

import {compose} from "redux";
import {getAuthThunk} from "../../Redux/authReducer";



class ProfileContainer extends React.Component {
  componentDidMount() {


    let userId = this.props.match.params.userId;

  if (!userId) {
      userId = 9494
    }



    this.props.setUserProfileThunk(userId);
    this.props.getUserStatusThunk(userId);

  }


  render() {
    return (
      <div>
        <Profile status={this.props.status} updateStatus={this.props.updateUserStatusThunk} profile={this.props.profile} {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.userId
  }
}

export  default  compose(
  connect(mapStateToProps, {setUserProfileThunk,
  getUserStatusThunk, updateUserStatusThunk, getAuthThunk}),
  withRouter)(ProfileContainer)


