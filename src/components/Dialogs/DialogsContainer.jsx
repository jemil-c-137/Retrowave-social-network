import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/messagesReducer";
import Dialogues from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
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
const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer