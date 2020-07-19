import React from "react";
import classes from './Profile.module.css';
import User from "./User";
import MyPosts from "./MyPosts";


const Profile = (props) => {
  return (
    <main className={classes.content}>
      <User/>
      <MyPosts newPostText={props.newPostText} addPost={props.addPost} profilePage={props.profilePage} />
    </main>
  )
}

export default Profile