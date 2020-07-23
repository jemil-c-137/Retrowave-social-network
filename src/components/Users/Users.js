import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 100);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map( page => {
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
                <img className={styles.avatar} src={user.photos.small || 'http://placekitten.com/200/300'} alt=""/>
              </div>
              <div>
                {user.followed
                  ? <button onClick={() => {
                    props.unFollow(user.id)
                  }}>unfollow</button>
                  : <button onClick={() => {
                    props.follow(user.id)
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