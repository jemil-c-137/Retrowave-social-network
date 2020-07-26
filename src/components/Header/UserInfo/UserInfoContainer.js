import React from "react";
import UserInfo from "./UserInfo";
import connect from "react-redux/lib/connect/connect";
import {getAuth} from "../../../api/api";


class UserInfoContainer extends React.Component {

  componentDidMount() {
    getAuth().then(response => {
        this.props.setUserLogin(response.data.login)
      })
  }

  render() {
    return (
      <UserInfo userdData={this.props.userData} {...this.props}/>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    userData: state.profilePage.userData
  }
}

export default connect(mapStateToProps, {})(UserInfoContainer)