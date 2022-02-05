import './App.css';
import TodoList from './TodoList'
import React,{useState,useRef,useEffect} from 'react'

const LOCAL_STORAGE_KEY = "localStorage.key"

function App() {
  const [todos,setTodos] = useState([])
  const todosRef = useRef()

  useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

const toggleTodo = (id) => {
    const newList = [...todos]
    const todo = newList.find(todos => todos.id = id)
    todo.complete = !todo.complete
    setTodos(newList)
  }

 const handleAddTodos = (e) => {
 const name = todosRef.current.value
 console.log(name)
 if(!name) return 
 setTodos(prevTodos => {
  return [...prevTodos, { id: todos.id, name: name, complete: false}]
})
 todosRef.current.value  = null
  }

const handleClearTodos = () => {
   const incomplete_todos = todos.filter(todo => !todo.complete)
   setTodos(incomplete_todos)
  }

  return (
   <>
   <TodoList todos={todos} toggleTodo={toggleTodo}/>
   <input type="text" ref={todosRef}/>
   <button onClick={handleAddTodos}>Add Todos</button>
   <button onClick={handleClearTodos}>Clear todos</button>
   <div>{todos.filter( todo => !todo.complete).length} left to do</div>
   </>
  );
}

export default App;
