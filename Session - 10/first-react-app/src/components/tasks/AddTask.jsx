import React from 'react'
import { useState } from 'react'
import {useForm } from 'react-hook-form'

function AddTask(props) {

    let {tasks,setTasks}=props.data;
    let {register,handleSubmit}=useForm()

    function add(taskObj){
        setTasks([...tasks,taskObj.newtask]);
    }

  return (
    <div>
      <h2 className='text-primary'>Add New Task </h2> 
      <form onSubmit={handleSubmit(add)}> 
        <input 
          type="text" 
        {...register("newtask")} 
        className='form-control' 
        placeholder='NewTask'
        />
        <button type='submit' className="btn btn-success">Add</button>
        </form>   
      </div>
  )
}

export default AddTask
