import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post value={post.text} count={post.value} />)

  let newPost = React.createRef();

  let printPost = () => {
    let post = newPost.current.value;
    props.addPost(post);
  }

  return(
    <div> My posts
      <div className={classes.wrapper}>
        <textarea ref={newPost}></textarea>
        <button onClick={ printPost } className={classes.button}> Add post</button>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts