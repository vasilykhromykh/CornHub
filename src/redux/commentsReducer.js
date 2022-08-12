const initialState={
    comments:[]

}
const ADD_COMMENTS='ADD_COMMENTS'

export const commentsReducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_COMMENTS: return {...state, comments: [...state.comments, ...action.payload]}
        default: return state
    }

}
export const addManyCommentsAC=(payload)=>({type:ADD_COMMENTS, payload})