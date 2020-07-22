import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Music from "./components/Music";
import News from "./components/News";
import Footer from "./components/Footer";
import DialoguesContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar  />
        <div className="app-wrapper-content">
          <Route path='/dialogues'
                 render={() => <DialoguesContainer />}
          />
          <Route path='/profile'
                 render={() => <Profile />}
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
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;

// messagesPage={props.state.messagesPage}
// store={props.store}