import React from "react";
import * as serviceWorker from './serviceWorker';
import store from "./Redux/store";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} newMessageText={store.updateMessageArea.bind(store)} newPostText={store.updateNewAreaText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
// state={state} updateMessageArea={updateMessageArea} addPost={addPost} updateTextArea={updateNewAreaText} newMessage={addMessage}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
