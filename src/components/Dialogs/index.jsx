import React from "react";
import styles from './Dialogs.module.css';
import DialogueItem from "./DialogItems";
import Message from "./DialogMessages";

const Dialogues = (props) => {
  let dialogElements = props.messagesPage.dialogsData.map( dialog => <DialogueItem name={dialog.name} id={dialog.id} ava={dialog.avatar}/> )
  let dialogMessages = props.messagesPage.messageData.map( message => <Message text={message.message}/>)


  let newMessage = React.createRef();



  let sendMessage = () => {
    props.addMessage()
    props.newMessageText('')
  }

  let newMessageArea = () => {
    let text = newMessage.current.value;
    props.newMessageText(text);

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
          <textarea className={styles.textArea} onChange={newMessageArea} ref={newMessage} value={props.messagesPage.newMessageText}> </textarea>
          <button className={styles.sendButton} onClick={sendMessage}>Send</button>
        </div>
      </div>


    </div>
  )
}

export default Dialogues