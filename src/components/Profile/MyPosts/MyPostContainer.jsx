import React from "react";

import {addPostActionCreator, updateNewAreaTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./index";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData
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