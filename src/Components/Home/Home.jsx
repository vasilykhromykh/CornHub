import {useSelector} from "react-redux";
import Card from "./Card/Card";
import styles from './Home.module.scss'
function Home({onSus, value}){

const items = useSelector(state => state.items.items)
    const prevItems = useSelector(state => state.prevItems.prevItems)

    return(
<div className={styles.home}>

    {items.length>10 ?


        <div>
            <h4 style={{color:'white', margin:'30px 0px 0px 0px ',}}>Your Videos:</h4>
        <div className={styles.cards}>
            {items.filter(product => product.title.toLowerCase().includes(value.toString().toLowerCase())).slice(10).map(item=>(
               <Card item={item} onSus={onSus}/>
            ))}

        </div>

        </div>: null}








    <div>
        <h4 style={{color:'white', margin:'30px 0px 0px 0px ',}}> The Most Popular Videos:</h4>
        <div className={styles.cards}>
            {items.filter(product => product.title.toLowerCase().includes(value.toString().toLowerCase())).slice(0, 10).map(item=>(
                <Card item={item} onSus={onSus}/>
            ))}

        </div>
    </div>
    {items.length>10 ?null :  <center><h1 style={{color:'white', margin:'30px 0px 0px 0px '}}>Press "Upload" To Load Your Video</h1></center>}




</div>
    )
}
export default Home