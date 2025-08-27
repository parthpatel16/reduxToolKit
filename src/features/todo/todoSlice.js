import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      })
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },

    updateTodo: (state,action) => {
      const {id, newText} = action.payload
      const todo= state.find(todo => todo.id === id)
      if(todo) {
        todo.text = newText
      }
    },

    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
