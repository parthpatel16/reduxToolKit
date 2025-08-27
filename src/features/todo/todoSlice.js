import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const loadTodos = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error loading todos:", error);
    return [];
  }
};


// Save to localStorage
const saveTodos = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos:", error);
  }
};


const initialState = loadTodos()

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
        
      }),saveTodos(state);
    },
    removeTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveTodos(newState);
      return newState; // must return since we replaced the array
    },

    updateTodo: (state,action) => {
      const {id, newText} = action.payload
      const todo= state.find(todo => todo.id === id)
      if(todo) {
        todo.text = newText
        todo.completed = false;
      }
      saveTodos(state); // ✅ persist
    },

    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      saveTodos(state);
    }
  }
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
