import styles from './Comment.module.scss'
import React from "react";
function Comment({item}) {
    return(
        <div className={styles.card}>
          <div className={styles.head}>  <img width={61} src='UI/user.jpg'/>
             <p> {item.name}</p>

          </div>
            <span>  {item.body}</span>
        </div>
    )
}
export default Comment