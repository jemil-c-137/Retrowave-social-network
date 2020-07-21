import React from "react";
import classes from './Profile.module.css';
import User from "./User";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
  return (
    <main className={classes.content}>
      <User/>
      <MyPostsContainer store={props.store} />
    </main>
  )
}

export default Profile