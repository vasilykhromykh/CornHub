import styles from "./Header.module.scss"
import {addItemAC} from "../../redux/itemReducer";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
function Header({sos}){


function pop(value){
    sos(value)
}


    return(
        <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
         <Link to='/'>  <img  width={150} src='UI/logo.png'/></Link>
            <div> <img height={15} width={15} src='UI/search.png'/><input onChange={(e)=>pop(e.target.value)} style={{outline:'none'}} placeholder='Explore CornHub '/></div>
 <Link to='/addvideo'><div  className={styles.but}><img height={15} width={15}  src='UI/cam.png'/> <p>Upload</p></div></Link>
            <Link to='/notready'>   <span>Login Register</span> </Link>


        </div>
              <div className={styles.headerBottom}>
                  <Link to='/'>  <span>Home Page</span>  </Link>
                  <Link to='/notready'> <span>Video</span></Link>
                  <Link to='/notready'>     <span>Categories</span></Link>
                      <Link to='/notready'>      <span>Online Streams</span></Link>
                          <Link to='/notready'>       <span>CornStars</span></Link>
                              <Link to='/notready'>       <span>Poker</span></Link>
                                  <Link to='/notready'>    <span>Community</span></Link>
                                      <Link to='/notready'>      <span>Photo's and GIFs</span></Link>
            </div>
        </div>
    )
}
export default Header