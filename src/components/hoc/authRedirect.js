import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
  debugger;

  return {

    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {


  class RedirectComponent extends React.Component {
    render() {
      if(this.props.isAuth === false) return <Redirect to={'/Login'} />
      return <Component {...this.props} />
    }
  }



let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)

  return RedirectComponent
}