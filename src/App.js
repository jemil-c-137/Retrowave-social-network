import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";

import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Music from "./components/Music";
import News from "./components/News";
import Footer from "./components/Footer";
import DialoguesContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar  />
        <div className="app-wrapper-content">
          <Route path='/dialogues'
                 render={() => <DialoguesContainer />}
          />
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer />}
          />
          <Route path='/news'
                 render={() => <News />}
          />
          <Route path='/music'
                 render={() => <Music />}
          />
          <Route path={'/settings'}
                 render={() => <Settings />}
          />
          <Route path={'/users'}
                 render={() => <UsersContainer />}
          />
          <Route path={'/login'}
                 render={() => <Login />}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;

// messagesPage={props.state.messagesPage}
// store={props.store}