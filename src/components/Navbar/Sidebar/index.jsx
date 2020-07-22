import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

/*

const Sidebar = (props) => {
  return(
    <div>
      <StoreContext.Consumer>
          return (
            <Friends user={store.getState().messagesPage.dialogsData}/>
          )
        }}
      </StoreContext.Consumer>

    </div>
  )
}
*/

const mapStateToProps = (state) => {
  return {
    user: state.messagesPage.dialogsData
  }
}


const Sidebar = connect(mapStateToProps)(Friends)

export default Sidebar