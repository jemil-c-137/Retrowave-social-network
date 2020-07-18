import styles from "./DialogMessages.module.css";
import React from "react";

const Message = (props) => {


  return (
      <div className={styles.message_wrapper}>
        <div className={styles.message}>
          {props.text}
        </div>
        <img className={styles.avatar} src="https://i.pinimg.com/originals/02/2b/bb/022bbb45b3257c3c494a1de93179bd8a.png" alt=""/>
      </div>
  )
}

export default Message