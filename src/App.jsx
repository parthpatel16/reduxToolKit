import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h2>Redux toolkit tutorial practice</h2>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App
