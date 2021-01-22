import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings';
import Music from './components/Music';
import News from './components/News';
import Footer from './components/Footer';

import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/Preloader';
import { Route, withRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { withSuspense } from './components/hoc/withSuspense';


//lazy looading
const DialoguesContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileComponent'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/dialogues"
              render={withSuspense(DialoguesContainer)}
            />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path={'/settings'} render={() => <Settings />} />
            <Route path={'/users'} render={() => <UsersContainer />} />
            <Route path={'/login'} component={() => <Login />} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppWithRouter = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
