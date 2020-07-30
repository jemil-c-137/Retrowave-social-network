import React from "react";
import styles from './Dialogs.module.css';
import DialogueItem from "./DialogItems";
import Message from "./DialogMessages";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

let maxLength20 = maxLengthCreator(20)

const MessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} action="">
      <Field name={'messageText'} component={Textarea} validate={[required, maxLength20]} type="textarea"/>
      <button>send</button>
    </form>
  )
}

const MessageReduxForm =  reduxForm({ form: 'message'})(MessageForm)

const Dialogues = (props) => {

  let dialogElements = props.messagesPage.dialogsData.map( dialog => <DialogueItem name={dialog.name} id={dialog.id} ava={dialog.avatar}/> )
  let dialogMessages = props.messagesPage.messageData.map( message => <Message text={message.message}/>)

  let addMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.newMessageText(text)

  }

  let manageSubmit = (formData) => {

    props.newMessageText(formData.messageText)
    props.sendMessage()
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
        <div>
          {/*<MessageReduxForm onSubmit={manageSubmit}/>*/}
        </div>
        <div className={styles.sendMessage}>
          <textarea className={styles.textArea} placeholder={'Your message'} onChange={onMessageChange} value={props.messagesPage.newMessageText}> </textarea>
          <button className={styles.sendButton} onClick={addMessage}>Send</button>
        </div>
      </div>


    </div>
  )
}

export default Dialogues