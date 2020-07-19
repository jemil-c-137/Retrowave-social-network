import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = (props) => {
  let posts = props.profilePage.postsData.map(post => <Post value={post.text} count={post.value} />)

  let newPost = React.createRef();

  let printPost = () => {
    console.log(props)
    props.addPost();
    props.newPostText('');
  }

  let onAreaChange = () => {
    let text = newPost.current.value;
    props.newPostText(text)
  }
  return(
    <div> My posts
      <div className={classes.wrapper}>
        <textarea
          ref={newPost}
          onChange={onAreaChange}
          value={props.profilePage.newAreaText}> </textarea>
        <button onClick={ printPost } className={classes.button}> Add post</button>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts