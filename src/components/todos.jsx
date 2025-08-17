import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">
        Your Todos
      </h3>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet! 🚀</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className="flex justify-between items-center bg-gray-800 shadow-md rounded-lg px-4 py-2 border border-gray-700"
            >
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="mr-3 w-5 h-5 text-indigo-500 border-gray-600 rounded focus:ring-indigo-500"
                />
                <span
                  className={`${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-200"
                  } text-lg`}
                >
                  {todo.text}
                </span>
              </div>

              <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
