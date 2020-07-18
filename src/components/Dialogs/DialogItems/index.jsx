import React from "react";
import styles from "./DialogItems.module.css";
import {NavLink} from "react-router-dom";


const DialogueItem = (props) => {
  let path = "/dialogues/" + props.id;
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <img className={styles.avatar} src={props.ava} alt=""/>
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogueItem