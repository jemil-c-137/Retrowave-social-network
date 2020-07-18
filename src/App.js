import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogues from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Music from "./components/Music";
import News from "./components/News";
import Footer from "./components/Footer";




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.messagesPage}/>
        <div className="app-wrapper-content">
          <Route path='/dialogues'
                 render={() => <Dialogues state={props.state.messagesPage} />}/>
          <Route path='/profile'
                 render={() => <Profile addPost={props.addPost} state={props.state.profilePage}/>}/>
          <Route path='/news'
                 render={() => <News />} />
          <Route path='/music'
                 render={() => <Music />} />
          <Route path={'/settings'}
                 render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
