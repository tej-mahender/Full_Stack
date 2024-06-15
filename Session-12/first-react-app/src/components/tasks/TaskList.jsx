import React from 'react'

function TaskList(props) {
  return (
    <div>
        <h2 className='text-primary'> List of Tasks </h2>
        {
            props.tasks.map(task=> <p key={task}>{task}</p>)
        }
    </div>
  )
}

export default TaskList
