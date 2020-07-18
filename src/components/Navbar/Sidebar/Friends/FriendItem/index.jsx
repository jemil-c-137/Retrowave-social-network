import React from "react";
import styles from './FriendItem.module.css'

const FriendItem = (props) => {
  return(
    <div>
      <div className={styles.avatar}><img src={props.ava} alt=""/></div>
      <div className={styles.name}>{props.name}</div>
    </div>
  )
}

export default FriendItem