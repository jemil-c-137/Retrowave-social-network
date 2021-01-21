import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls";


const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={"postText"} placeholder={"your post"} type='textarea' validate={[required, maxLength10]}/>
      <button>Send</button>
    </form>
  )
}

const ReduxPostForm = reduxForm( {form: 'post'})(PostForm)

window.props = []

function MyPosts(props) {
  console.log('render')
  window.props.push(props)
  let posts = props.posts.map(post => <Post value={post.text} count={post.value}/>)

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
  return (
    <div> My posts
      <ReduxPostForm onSubmit={managePost}/>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts