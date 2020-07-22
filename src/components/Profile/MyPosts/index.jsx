import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = (props) => {
  let posts = props.posts.postsData.map(post => <Post value={post.text} count={post.value} />)

  let onAddPost = () => {
    props.addPost()
  }
  let onAreaChange = (e) => {
    let text = e.target.value
    props.onAreaChange(text)
  }
  return(
    <div> My posts
      <div className={classes.wrapper}>
        <textarea
          placeholder={'Your post text'}
          onChange={onAreaChange}
          value={props.posts.newAreaText}> </textarea>
        <button onClick={ onAddPost } className={classes.button}> Add post</button>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts