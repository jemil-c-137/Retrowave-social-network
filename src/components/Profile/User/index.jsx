import React from "react";
import classes from './User.module.css'
import Preloader from "../../common/Preloader";
import UserStatus from "./UserStatus/UserStatus";

const User = ({profile, updateStatus, status}) => {
  if (!profile) {
    return <Preloader />
  }
  return (

    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={profile.photos.large} alt=""/>
      </div>
      <div>
        <UserStatus newStatus={updateStatus} status={status}/>
      </div>
      <div>
        <p className={`${classes.text} ${classes.title}`}>{profile.fullName}</p>
        <p className={classes.text}>{profile.aboutMe}</p>
        <p className={classes.text}>{profile.lookingForAJob ? profile.lookingForAJobDescription : ''}</p>
        <p className={classes.text}>Education: MIT'20</p>
        <p className={classes.text}>website: it-kamasutra.com</p>
      </div>
    </div>
  )
}

export default User