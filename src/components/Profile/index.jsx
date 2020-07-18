import React from "react";
import classes from './Profile.module.css';
import User from "./User";
import MyPosts from "./MyPosts";


const Profile = (props) => {

  return (
    <main className={classes.content}>
      <User/>
      <MyPosts addPost={props.addPost} posts={props.state.postsData}/>
    </main>
  )
}

export default Profile