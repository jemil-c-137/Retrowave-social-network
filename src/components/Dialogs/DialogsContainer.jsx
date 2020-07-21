import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/messagesReducer";
import Dialogues from "./index";
import StoreContext from "../../Redux/Store-Context";


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

export default DialoguesContainer