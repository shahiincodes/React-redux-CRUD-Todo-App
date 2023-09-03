import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../redux/Actions/todoActions'
import SingleTodo from './SingleTodo'

const Todo = () => {
    const todos = useSelector((state)=>state.todo.todos)
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
      
        <div className='heading'>
        <h1 className="text-center">Todo-{todos.length}</h1><br/>
        < input className='text-center' type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} />
        <button className='btn btn-primary mx-2 mt-1' onClick={()=>{dispatch(addTodo(inputData));setInputData('')}}>Add Todo</button>
        </div>
        
        <hr />
        {
          todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id}/>
            )
            )
          }
        
      </div>
    
  )
}

export default Todo