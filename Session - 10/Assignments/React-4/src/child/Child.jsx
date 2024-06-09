import {useState}from 'react'

function Child(props) {
  return (
    <div className='bg-light p-4 m-4'>
      <h2>Child</h2>
      <button className="btn btn-secondary m-3" onClick={props.data.Increment}>Increment</button>
      <button className="btn btn-secondary m-3" onClick={props.data.Decrement}>Decrement</button>
    </div>
  )
}

export default Child
