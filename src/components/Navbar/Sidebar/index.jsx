import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../Redux/Store-Context";

const Sidebar = (props) => {
  return(
    <div>
      <StoreContext.Consumer>
        {store => {
          console.log(store)
          return (
            <Friends user={store.getState().messagesPage.dialogsData}/>
          )
        }}
      </StoreContext.Consumer>

    </div>
  )
}

export default Sidebar