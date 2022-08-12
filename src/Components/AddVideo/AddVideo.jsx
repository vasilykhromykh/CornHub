import styles from './AddVideo.module.scss'
import {Link} from "react-router-dom";
import {addItemAC} from "../../redux/itemReducer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
function AddVideo(){

   const [link, setLink]=React.useState()
    const [author, setAuthor]=React.useState()
    const [title, setTitle]=React.useState()
    const dispatch =useDispatch()
    const last= useSelector(state => state.items.items).slice(-1).map(res=>(
        res.id
    ))


 function addItem(){

     const item =  {
         title,
         author,
         link,
         like:0,
         liked:null,
         view: 0,
         id: last[0] + 1,
         your:true
     }
     dispatch(addItemAC(item))
 }
    return(
        <div className={styles.addVideoWrapper}>
            <h1>Upload Your Video With Redux</h1>
            <input style={{outline:'none'}} placeholder='Your Video Title...' onChange={(e)=>setTitle(e.target.value)}/>
            <input style={{outline:'none'}} placeholder='Your Name...' onChange={(e)=>setAuthor(e.target.value)}/>

            <input style={{outline:'none'}} placeholder='Link To Your Youtube Video...' onChange={(e)=>setLink(e.target.value)}/>
           <p> Supported Platforms: YouTube, SoundCloud, Facebook, Vimeo, Twitch, Streamable, Wistia, DailyMotion, Mixcloud, Vidyard,	Kaltura</p>

            {link && title && author!== undefined? <Link to='/'> <button onClick={addItem}>Upload</button></Link> :<button disabled={true} onClick={addItem}>Upload</button>}
        </div>

    )
}
export default AddVideo