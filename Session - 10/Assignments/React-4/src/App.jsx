import { useState } from 'react'
import './App.css'
import Child from './child/Child'

function App() {
  let [counter,setCounter]=useState(0)

  function Increment(){
    setCounter(counter+1)
  }
  function Decrement(){
    setCounter(counter-1)
  }

  return (
    <div className='mx-auto mt-5 bg-info w-75 p-4 text-center '>
      <h2>Parent</h2>
      <h3>Counter - {counter}</h3>
      <Child data={{counter,Increment,Decrement}}/>
    </div>
  )
}

export default App
