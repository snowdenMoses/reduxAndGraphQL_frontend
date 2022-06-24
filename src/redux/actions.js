import { FETCHBOOKS } from "./actionsTypes";

export const fetchBooks =(books)=>{
    return{
        type:FETCHBOOKS,
        payload:books
    }
    
}