import React from "react";
import styles from './Dialogs.module.css';
import DialogueItem from "./DialogItems";
import Message from "./DialogMessages";

const Dialogues = (props) => {

  let newMessage = React.createRef();

  let sendMessage = () => {
    let messageText = newMessage.current.value;
    alert(messageText)
  }


  let dialogElements = props.state.dialogsData.map( dialog => <DialogueItem name={dialog.name} id={dialog.id} ava={dialog.avatar}/> )
  let dialogMessages = props.state.messageData.map( message => <Message text={message.message}/>)
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
          <textarea className={styles.textArea} ref={newMessage}></textarea>
          <button className={styles.sendButton} onClick={sendMessage}>Send</button>
        </div>
      </div>


    </div>
  )
}

export default Dialogues