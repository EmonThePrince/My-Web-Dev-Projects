import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
       <div className="h-4/5 w-4/5
       flex-col justify-center
       items-center
       bg-orange-500">
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App
