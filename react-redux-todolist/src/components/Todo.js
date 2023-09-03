import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../redux/Actions/todoActions'
import S from './S'

const Todo = () => {
    const todos = useSelector((state)=>state.todo.todos)
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
  return (
    <div className='todo'>
        <h1 className="text-center">Todo</h1><br/>
        
        < input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} />
        <button className='btn btn-primary mx-2' onClick={()=>{dispatch(addTodo(inputData));setInputData('')}}>Add Todo</button>
        
        <hr />
        {
          todos.map(todo=>(
            <S todo={todo} key={todo.id}/>
          )
          )
        }
        
    </div>
  )
}

export default Todo