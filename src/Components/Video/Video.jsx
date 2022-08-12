import styles from './Video.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addLikeAC, addViewAC, nullLikeAC, removeItemAC, removeLikeAC} from "../../redux/itemReducer";
import React from "react";
import ReactPlayer from "react-player";
import {addManyCommentsAC} from "../../redux/commentsReducer";
import {fetchComments} from "../AsyncActions/comments";
import Comment from "./Comment/Comment";
import {Link} from "react-router-dom";
function Video( {item}){
const [likes, setLikes]=React.useState(item.like)
const comments = useSelector(state => state.comments.comments)

const up=item.id
    console.log(up)

    const liked = useSelector(state =>state.items.items[up-1].liked )

    console.log(liked)
   const dispatch=useDispatch()


    function Like(){
        setLikes(item.like+1)
        console.log('un')
        dispatch(addLikeAC(item.id))

    }
    function unLike(){
        setLikes(item.like-1)
console.log('un')
        dispatch(removeLikeAC(item.id))

    }
    function nullLikeMin(){
        setLikes(item.like)
        dispatch(removeLikeAC(item.id))
        dispatch(nullLikeAC(item.id))
    }
    function nullLikePlus(){
        setLikes(item.like)
        dispatch(addLikeAC(item.id))
        dispatch(nullLikeAC(item.id))
    }

    function removeItem(){
    dispatch(removeItemAC(item.id))
    }
    return(
        <div className={styles.video}>
            {item.link.length >15 ?
                <ReactPlayer url={item.link} light={true} width='856px'
                         height='484px'/>
           :<img width={856} height={484} src='UI/notfound.png'/>}

         <p>{item.title}</p>
<div className={styles.inf}>
           <div> <span>{item.view} views | </span><span> <img  width={14} src='UI/like.png'/> {likes}</span>

           </div>
  <div className={styles.likes}>



      {liked  === true?
       <img width={23} className={styles.img1} src='UI/likeGreen.png' onClick={() => nullLikeMin()}/>
        :
        <img  width={23} className={styles.img1} src='UI/like.png' onClick={() => Like()}/>

    }
    {liked === false ?
        <img width={23} className={styles.img2} src='UI/likeRed.png' onClick={() => nullLikePlus() } />

        :
        <img  className={styles.img2}  width={23} src='UI/like.png' onClick={() =>unLike()}/>

    }
      {item.your?<Link to='/'> <button onClick={()=>removeItem()}>Delete Video</button></Link>:null}
  </div >


</div>
<div className={styles.user}>
<div><img width={61} src='UI/user.jpg'/>
    <span>{item.author}</span></div>
<button>Subscribe</button>
</div>
<div className={styles.comments}>
    {comments.length>2 ? <p>Comments:</p> : <button onClick={()=>dispatch(fetchComments())}>fetch comments with react thunk</button>}




    <div>

        {comments.length>10 ?

         <div>   {comments.map(item=>(
              <Comment item={item}/>
            ))}

         </div>

            :


            null}


    </div>
</div>




        </div>
    )
}
export default   Video