import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/messagesReducer";
import Dialogues from "./index";
import {connect} from "react-redux";

/*

const DialoguesContainer = (props) => {
  // let state = props.store.getState()



  return (
    <StoreContext.Consumer>
      {store => {
        let sendMessage = () => {
          store.dispatch(addMessageActionCreator())
        }

        let newMessageText = (text) => {
          let action = updateMessageTextActionCreator(text);
          store.dispatch(action)

        }
        return(
          <Dialogues sendMessage={sendMessage} newMessageText={newMessageText} messages={store.getState().messagesPage}/>
        )
      }}
    </StoreContext.Consumer>

  )
}
*/


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