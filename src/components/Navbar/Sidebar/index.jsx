import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    user: state.messagesPage.dialogsData
  }
}


const Sidebar = connect(mapStateToProps)(Friends)

export default Sidebar