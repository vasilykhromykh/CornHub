import {addManyCommentsAC} from "../../redux/commentsReducer";

export const fetchComments=()=>{
    return function (dispatch){
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res=>res.json())
            .then(json=>dispatch(addManyCommentsAC(json)))
    }
}