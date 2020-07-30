import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";

import  {BrowserRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings";
import Music from "./components/Music";
import News from "./components/News";
import Footer from "./components/Footer";
import DialoguesContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";

import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader";



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path='/dialogues'
                   render={() => <DialoguesContainer/>}
            />
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer/>}
            />
            <Route path='/news'
                   render={() => <News/>}
            />
            <Route path='/music'
                   render={() => <Music/>}
            />
            <Route path={'/settings'}
                   render={() => <Settings/>}
            />
            <Route path={'/users'}
                   render={() => <UsersContainer/>}
            />
            <Route path={'/login'}
                   component={() => <Login/>}
            />
          </div>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}) )(App)

// messagesPage={props.state.messagesPage}
// store={props.store}