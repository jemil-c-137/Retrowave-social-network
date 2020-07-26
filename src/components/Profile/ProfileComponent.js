import React from "react";
import {connect} from "react-redux";
import Profile from "./index";

import {setUserProfileThunk} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {APIsetUserProfile} from "../../api/api";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../hoc/authRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId

    if (!userId) {
      userId = 2
    }
    this.props.setUserProfileThunk(userId)
  }
  render() {



    return (
      <div>
        <Profile profile={this.props.profile} {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    profile: state.profilePage.profile,

  }
}

export  default  compose(
  connect(mapStateToProps, {setUserProfileThunk}),
  withRouter,
  withAuthRedirect)(ProfileContainer)


