import React from "react";
import Header from "./index";
import {connect} from "react-redux";
import {logoutUser} from "../../Redux/authReducer";



class HeaderContainer extends React.Component {

  componentDidMount() {

 // this.props.getAuthThunk()
   /* getAuth().then(response => {
        if(response.data.resultCode === 0) {
          let {userId, login, email} = response.data.data;
          this.props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login)
        }
       //

      })*/
  }

  render() {

    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {logoutUser})(HeaderContainer)

