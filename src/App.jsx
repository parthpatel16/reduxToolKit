
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'
function App() {
  

  return (
    <>
    <div className='items-center'>
      <h2 className='text-white font-bold text-lg '>Redux toolkit tutorial practice</h2>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App;