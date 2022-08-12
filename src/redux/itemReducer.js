const initialState= {

    items: [
        {id:1,
            title:'My New Hot Corn-Costume:)' ,
            author:'CornBoy2014' ,
            link:'https://www.youtube.com/watch?v=j8qp3ITVqY0&ab_channel=Slimecicle',
            view: 1221,
            like:228,
            liked:null
        },
        {id:2,
            title:'Corn therapy With MASTER' ,
            author:'The Corn SEO' ,
            link:'https://www.youtube.com/watch?v=1VbZE6YhjKk&ab_channel=RecessTherapy',
            view: 2221,
            like:2021,
            liked:null
        },
        {id:3,
            title:'Beautiful Corn Slowly Undresses' ,
            author:'HappyFarmer' ,
            link:'https://www.youtube.com/watch?v=e8vWhX1zXKM&ab_channel=FoodWishes',
            view: 2199,
            like:207,
            liked:null
        },
        {id:4,
            title:'Two Corn Girls Finally Together' ,
            author:'CornBoy2014' ,
            link:'https://www.youtube.com/watch?v=JOgaRlqnIV8&ab_channel=Foods101withDeronda',
            view: 6231,
            like:831,
            liked:null
        },
        {id:5,
            title:'Step Truck And Step Corn' ,
            author:'CornCore' ,
            link:'https://www.youtube.com/watch?v=PgAIeS9SieQ&ab_channel=Tractorspotter',
            view: 1322,
            like:273,
            liked:null
        },
        {id:6,
            title:'"Dirty Corn" The ADULT Film' ,
            author:'Jeppery Dallas' ,
            link:'https://www.youtube.com/watch?v=bJeG-GGH114&ab_channel=JulianSmith',
            view: 3242,
            like:986,
            liked:null
        },
        {id:7,
            title: 'Interracial Corn' ,
            author:'Animator228' ,
            link:'https://www.youtube.com/watch?v=fbDVbCOpjbQ&ab_channel=JoshuaWeissman',
            view: 58441,
            like:2258,
            liked:null
        },
        {id:8,
            title:'Corn ThreeSome!' ,
            author:'goodCorn123' ,
            link:'https://www.youtube.com/watch?v=jyWzMA32KOo&pbjreload=102&ab_channel=CookingShooking',
            view: 8452,
            like:282,
            liked:null
        },
        {id:9,
            title:'Corn Sucking' ,
            author:'Dan The Man' ,
            link:'https://www.youtube.com/watch?v=g5ABAbnTPAA&ab_channel=America%27sTestKitchen',
            view: 6051,
            like:932,
            liked:null
        },
        {id:10,
            title:'Asian Corn Torture' ,
            author:'Xian Jui' ,
            link:'https://www.youtube.com/watch?v=QyUVvS79zVk&ab_channel=TasteShow',
            view: 111,
            like:52,
            liked:null
        },
    ]
}

const ADD_ITEM='ADD_ITEM'
const REMOVE_ITEM='REMOVE_ITEM'
const ADD_VIEW='ADD_VIEW'
const ADD_LIKE='ADD_LIKE'
const REMOVE_LIKE='REMOVE_LIKE'
const NULL_LIKE='NULL_LIKE'
export const itemReducer = (state=initialState, action)=>{
switch(action.type){
    case ADD_ITEM: return{...state, items:[...state.items, action.payload]}
    case REMOVE_ITEM:return{...state, items:state.items.filter(item=>item.id !== action.payload)}
    case ADD_VIEW:return {...state, items: state.items.map(u=>{
        if (u.id ===action.payload){
            return {...u, view: u.view+1 }
        }
    return u
    })}
    case ADD_LIKE:return {...state, items: state.items.map(u=>{
            if (u.id ===action.payload){
                return {...u, like: u.like+1, liked: true  }
            }return u
        })}
    case REMOVE_LIKE:return {...state, items: state.items.map(u=>{
            if (u.id ===action.payload){
                return {...u, like: u.like-1 , liked: false}
            }return u
        })}
    case NULL_LIKE:return {...state, items: state.items.map(u=>{
            if (u.id ===action.payload){
                return {...u,  liked: null}
            }return u
        })}
    default: return state


}
}
export const addItemAC =(payload)=>({type:ADD_ITEM,payload })
export const removeItemAC =(payload)=>({type:REMOVE_ITEM,payload })
export const addViewAC =(payload)=>({type:ADD_VIEW,payload })
export const addLikeAC =(payload)=>({type:ADD_LIKE,payload })
export const removeLikeAC =(payload)=>({type:REMOVE_LIKE,payload })
export const nullLikeAC =(payload)=>({type:NULL_LIKE,payload })