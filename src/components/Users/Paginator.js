import React, {useState} from "react";
import styles from "./Users.module.css";

const Paginator = ({totalUsers, pageSize, currentPage, onChange}) => {
  let pagesCount = Math.ceil((totalUsers / pageSize) / 100);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  return (
    <div>
      {pages.map(page => {
          return <span
            onClick={() => {
              console.log(currentPage)
              onChange(page)
            }}
            className={currentPage === page && styles.selectedPage}>{page}</span>
        }
      )}
    </div>
  )
}

export default Paginator