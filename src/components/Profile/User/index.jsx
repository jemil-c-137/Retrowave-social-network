import React from "react";
import classes from './User.module.css'

const User = () => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src="https://cs8.pikabu.ru/post_img/big/2016/09/17/6/1474102501152890619.jpg" alt=""/>
      </div>
      <div>
        <p className={`${classes.text} ${classes.title}`}>Jemil Suleimanov</p>
        <p className={classes.text}>Date of Birth</p>
        <p className={classes.text}>City Minsk</p>
        <p className={classes.text}>Education: MIT'20</p>
        <p className={classes.text}>website: it-kamasutra.com</p>
      </div>
    </div>
  )
}

export default User