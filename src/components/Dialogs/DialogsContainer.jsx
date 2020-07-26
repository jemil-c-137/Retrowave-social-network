import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/messagesReducer";
import Dialogues from "./index";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/authRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  debugger;
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogues)

