import styles from './Card.module.scss'
import ReactPlayer from "react-player";
import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addViewAC} from "../../../redux/itemReducer";
function Card({item, send, onSus}){
    const dispatch=useDispatch()




 function Sus(item){
     dispatch(addViewAC(item.id))
     onSus(item)
 }

    return(
       <Link to='Video'><div className={styles.cardWrapper} onClick={()=>Sus(item)}>
           {item.link.length >15 ?
            <ReactPlayer  url={item.link} light={true} width='256px'
                         height='145px'/>
:<img width={256} height={145} src="UI/notfound.png"/>}


            <p>{item.title}</p>
            <span className={styles.span}>{item.author}</span>

            <span>{item.view>0?item.view:0 } views  <img width={14} height={14} src='UI/like.png'/> {item.like>0?item.like:0}</span>
        </div></Link>
    )
}
export default Card