import React from 'react'

function TasksCount(props) {
  return (
    <div>
        <h2 className='text-primary'>No of Tasks </h2>    
        <h2>{props.tasks.length}</h2>
    </div>
  )
}

export default TasksCount
