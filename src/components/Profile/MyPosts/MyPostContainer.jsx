import React from "react";

import {addPostActionCreator, updateNewAreaTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./index";
import {connect} from "react-redux";

/*

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
*/

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAreaChange: (text) => {
      dispatch(updateNewAreaTextActionCreator(text))
    },
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer