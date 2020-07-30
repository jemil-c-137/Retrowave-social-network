import React from "react";
import classes from './User.module.css'
import Preloader from "../../common/Preloader";
import UserStatus from "./UserStatus/UserStatus";

const User = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (

    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt=""/>
      </div>
      <div>
        <UserStatus newStatus={props.updateStatus} status={props.status}/>
      </div>
      <div>
        <p className={`${classes.text} ${classes.title}`}>{props.profile.fullName}</p>
        <p className={classes.text}>{props.profile.aboutMe}</p>
        <p className={classes.text}>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : ''}</p>
        <p className={classes.text}>Education: MIT'20</p>
        <p className={classes.text}>website: it-kamasutra.com</p>
      </div>
    </div>
  )
}

export default User