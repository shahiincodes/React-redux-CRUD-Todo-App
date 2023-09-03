import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../constants/actionTypes";

export const addTodo = (input)=>{
    return {
        type: ADD_TODO,
        payload: input
    }
}
export const removeTodo = (id)=>{
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
export const updateTodo = (newTodo,id)=>{
    return {
        type : UPDATE_TODO ,
        payload: newTodo,
        id:id
    }
}