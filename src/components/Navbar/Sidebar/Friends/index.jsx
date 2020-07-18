import React from "react";
import FriendItem from "./FriendItem";
import styles from './Friends.module.css'

const Friends = (props) => {
  let friends = props.user.map(friend => <FriendItem ava={friend.avatar} name={friend.name}/>)
  return(
    <div className={styles.wrapper}>
      <div className={styles.title}>Friends</div>
      <div className={styles.items}>
        {friends}
      </div>
    </div>
  )
}

export default Friends