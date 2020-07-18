import React from "react";
import classes from './Post.module.css';

const Post = (props) => {


  return(
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt=""/>
      </div>
      <p className={classes.message}>
        {props.value}
      </p>
      <p> likes {props.count}</p>
    </div>
  )
}

export default Post