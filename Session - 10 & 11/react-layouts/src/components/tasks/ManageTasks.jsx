import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TasksCount from './TasksCount'
import { useState } from 'react'

 function ManageTasks() {

    let [tasks,setTasks]=useState([])

   return (
     <div>
       <h2>Task Manager</h2>
       <div className="row">
          <div className="col-sm-4"><AddTask data={{tasks,setTasks}}/></div>
          <div className="col-sm-4"> <TaskList tasks={tasks}/></div>
          <div className="col-sm-4"><TasksCount tasks={tasks}/></div>
        </div>
     </div>
     )
 }
export default ManageTasks