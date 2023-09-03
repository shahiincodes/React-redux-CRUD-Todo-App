import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../constants/actionTypes"

const initialState = {
    todos : []
}
const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id: new Date().getTime().toString(),
                        title: action.payload
                    }
                ]
            }
        case REMOVE_TODO :
            const newList = state.todos.filter(todo=>todo.id!==action.payload)
                return {
                    ...state,
                    todos:newList
                }
        case UPDATE_TODO :
            
                return {
                    ...state,
                    todos:[...state.todos.filter(todo=>todo.id!==action.id),{title: action.payload,id:action.id}]
                }
        default : return state
    }
}
export default todoReducer