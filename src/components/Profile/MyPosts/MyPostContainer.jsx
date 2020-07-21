import React from "react";

import {addPostActionCreator, updateNewAreaTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./index";
import StoreContext from "../../../Redux/Store-Context";

const MyPostsContainer = (props) => {
  return(
    <StoreContext.Consumer>
      {store => {

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
        let onAreaChange = (text) => {
          let action = updateNewAreaTextActionCreator(text)
          store.dispatch(action)
        }
        return (
          <MyPosts updateNewPostText={onAreaChange} addPost={addPost} posts={store.getState().profilePage} />
          )

        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer