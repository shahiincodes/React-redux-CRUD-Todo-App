import React, { useRef, useState } from 'react'
import '../todo.css'
import { useDispatch } from 'react-redux'
import { removeTodo,updateTodo} from '../redux/Actions/todoActions'

const S = ({todo}) => {
    const [isUpdate,setIsUpdate] = useState(false)
    const newTodo = useRef(null)
    const dispatch = useDispatch()
    const handleUpdate = ()=>{
        dispatch(updateTodo(newTodo.current.value,todo.id))
        setIsUpdate(false)
        newTodo.current=null
    }
    const updateForm = ()=>{
        return (
            <>
            <form action="">
                <input ref={newTodo} type="text" defaultValue={todo.title}/>
                <button className='btn btn-primary mx-2 mb-1' onClick={handleUpdate}>Update</button>
                <button className='btn btn-danger mx-2 mb-1'onClick={()=>dispatch(removeTodo(todo.id))}>Delete </button>
            </form>
            </>
        )
    }
    const renderItem = ()=>{
        return (
            <>
                <ol className='mainList' >
                    <li className='list' >
                    <h6 className='mx-5'>{todo.title}</h6> 
                    <button className='btn btn-danger mx-2 mb-1'onClick={()=> setIsUpdate(true)}>Edit</button>
                    <button className='btn btn-danger mx-2 mb-1'onClick={()=>dispatch(removeTodo(todo.id))}>Delete </button>
                    </li>
                </ol>
            </>
        )
    }
  return (
    <div>
        {isUpdate? updateForm():renderItem()}
    </div>
  )
}

export default S