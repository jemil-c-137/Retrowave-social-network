import React from "react";
import styles from "./Users.module.css"
import * as axios from 'axios'

const Users = (props) => {
  if(props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      }
    )
  }
  return (
    <div>
      {
        props.users.map(user => <div key={user.id}>
          <div className={styles.userWrapper}>
            <div>

              <div >
                <img className={styles.avatar} src={user.photos.small || 'http://placekitten.com/200/300'} alt=""/>
              </div>
              <div>
                {user.followed
                  ? <button onClick={() => {props.unFollow(user.id)}}>unfollow</button>
                  : <button onClick={() => {props.followUser(user.id)}}>follow</button>}
              </div>
            </div>
            <div>

              <div>
                <p className={styles.org}>{user.name}</p>
                <p className={styles.status}>{user.status}</p>
              </div>
              <div className={styles.location}>

                <p>{"user.location.country"}</p>
                <p>{"user.location.city"}</p>
              </div>
            </div>
          </div>

        </div>)
      }
    </div>
  )
}

export default Users