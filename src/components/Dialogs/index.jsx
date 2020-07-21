import React from "react";
import styles from './Dialogs.module.css';
import DialogueItem from "./DialogItems";
import Message from "./DialogMessages";



const Dialogues = (props) => {

  let dialogElements = props.messages.dialogsData.map( dialog => <DialogueItem name={dialog.name} id={dialog.id} ava={dialog.avatar}/> )
  let dialogMessages = props.messages.messageData.map( message => <Message text={message.message}/>)

  let addMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.newMessageText(text)

  }

  return (
    <div className={styles.dialoguesWrapper}>
      <div className={styles.dialogues}>
        {dialogElements}
      </div>
      <div className={styles.messages_wrapper}>
        <div className={styles.messages}>
          {dialogMessages}
        </div>
        <div className={styles.sendMessage}>
          <textarea className={styles.textArea} placeholder={'Your message'} onChange={onMessageChange} value={props.messages.newMessageText}> </textarea>
          <button className={styles.sendButton} onClick={addMessage}>Send</button>
        </div>
      </div>


    </div>
  )
}

export default Dialogues