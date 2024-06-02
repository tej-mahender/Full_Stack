import './App.css';

import{useState,useEffect} from 'react'

function App(){

  let [todos,setTodos]=useState([])

  async function getTodos(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos')
    let data=await res.json()
    setTodos(data)
  }
console.log(todos)
  useEffect(()=>{getTodos()},[])

  return(
    <div>
      <div className="container">
      <h1>Table Format</h1>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {
            todos.map((todo)=><tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed?'true': 'false'}</td>
            </tr>)
          }
        </tbody>
      </table>
      </div>

      <h1>Grid Format</h1>
      <div className="grid">
        {
      todos.map((todo)=><div key={todo.id} className='card'>
        <p>user id : {todo.userId}</p>
        <p>id: {todo.id}</p>
        <p>title: {todo.title}</p>
        <p>completed: {todo.completed?'true': 'false'}</p>
        </div>
        )}
      </div>

      
    </div>)
}
export default App;