import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {

  return (
    <header className={classes.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt=""/>
      <div className={classes.login_block}>
        {props.isAuth
          ? <div>{props.login}  <button onClick={props.logoutUser}>logout</button></div>
          :<NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  )
}

export default Header