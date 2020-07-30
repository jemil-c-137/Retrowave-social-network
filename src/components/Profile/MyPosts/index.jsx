import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post";


/*const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={"postText"} placeholder={"your post"} type='textarea' validate={[required, maxLength10]}/>
      <button>Send</button>
    </form>
  )
}

const ReduxPostForm = reduxForm( {form: 'post'})(PostForm)*/

const MyPosts = (props) => {
  let posts = props.posts.postsData.map(post => <Post value={post.text} count={post.value} />)

  let managePost = (formData) => {

    props.addPost(formData.postText)
  }

  let onAddPost = () => {
    props.addPost()
  }
  let onAreaChange = (e) => {
    let text = e.target.value
    props.onAreaChange(text)
  }
  return(
    <div> My posts
      {/*<ReduxPostForm onSubmit={managePost}/>*/}
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