import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <>
    
    {todos.map((todo) => {
        <li key={todo.id}>
            {todo.text}
            <button 
            onClick={() => dispatch(removeTodo(todo.id))}>


            </button>
        </li>
    })}
    </>
  )
}

export default Todos