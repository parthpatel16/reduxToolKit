import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = () => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id: editId, newText: editText }))
      setEditId(null)
      setEditText('')
    }
  }

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

                {editId === todo.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="bg-gray-700 text-white px-2 py-1 rounded"
                  />
                ) : (
                  <span
                    className={`${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-200"
                    } text-lg`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                {editId === todo.id ? (
                  <button
                    onClick={saveEdit}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(todo)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    Edit
                  </button>
                )}

                <button 
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
