import * as ActionType from "./actionsTypes"
let initialState={
    books:[]
}
export const fetchBooksReducers = (state=initialState,action)=>{
    switch(action.type){
        case ActionType.FETCHBOOKS:
            return {...state,books:action.payload};
        default:
            return state;
    }
}