import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

import {APIfollow, APIunfollow} from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 100);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map(page => {
            return <span
              onClick={() => props.onPageChanged(page)}
              className={props.currentPage === page && styles.selectedPage}>{page}</span>
          }
        )}
      </div>
      {
        props.users.map(user => <div key={user.id}>
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

                  ? <button className={styles.btn} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.unFollowThunk(user.id)
/*
                    props.toggleFollowing(true, user.id)
                    APIunfollow(user.id)
                      .then(response => {
                        props.toggleFollowing(false, user.id)
                        if (response.data.resultCode === 0) {

                          props.unFollow(user.id)
                        }

                      })*/
                  }}>unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.followThunk(user.id)

                   /* props.toggleFollowing(true, user.id)
                    APIfollow(user.id).then(response => {
                      if (response.data.resultCode === 0) {

                        props.followUser(user.id)
                      }
                      props.toggleFollowing(false, user.id)
                    })*/
                  }}>follow</button>}
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