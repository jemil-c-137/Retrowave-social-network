import React from "react";
import UserInfo from "./UserInfo";
import connect from "react-redux/lib/connect/connect";
import {AxiosInstance as axios} from "axios";


class UserInfoContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me')
      .then(response => {
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