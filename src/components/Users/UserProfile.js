import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";


let UserProfile = ({followingInProgress, user, followThunk, unFollowThunk }) => {
  return (
        <div className={styles.userWrapper}>
          <div>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img className={styles.avatar}
                     src={user.photos.small || 'http://placekitten.com/200/300'} alt=""/>
              </NavLink>
            </div>
            <div>
              {user.followed

                ? <button className={styles.btn} disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                            unFollowThunk(user.id)

                          }}>unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  followThunk(user.id)
                }}>follow</button>}
            </div>
          </div>
          <div>

            <div>
              <p className={styles.org}>{user.name}</p>
              <p className={styles.status}>{user.status}</p>
            </div>
            <div className={styles.location}>

            </div>
          </div>
        </div>
  )
}

export default UserProfile