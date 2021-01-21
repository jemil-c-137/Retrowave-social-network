import React from "react";
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import MainApp from "./App";


//let rerenderEntireTree = () => {
ReactDOM.render(
  <MainApp/>,
document.getElementById('root')
)
//}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})*/
