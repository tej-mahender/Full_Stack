import React from 'react'
import { useState } from 'react'
import {useForm } from 'react-hook-form'

function AddUser() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let [users,setUsers]=useState([])

    function handleFormSubmit(userObj){
        setUsers([...users,userObj])
    }

  return (
    <div className='container mt-5' >
        <h1 className="text-center mb-3">Login Form</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-50 m-auto">
            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Username</label>
                <input 
                    type="text" 
                    {...register('username',{required:true,minLength: 4,maxLength: 8})}
                    name='username' id='username'
                    className='form-control'
                    />
            </div>
            {errors.username?.type==='required' && <p className='text-danger'>Username is required</p>}
            {errors.username?.type==='minLength'&& <p className="text-danger">Username should be of 4 characters</p> }
            {errors.username?.type==='maxLength'&& <p className="text-danger">Username should be of less than 6 characters</p> }

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Date Of Birth</label>
                <input 
                    type="date" 
                    {...register('dob',{required:true})}
                    name='dob' id='dob'
                    className='form-control'
                    />
            </div>
            {errors.dob?.type==='required' && <p className='text-danger'>DOB is required</p>}

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>City</label>
                <input 
                    type="text" 
                    {...register('city',{required:true})}
                    name='city' id='city'
                    className='form-control'
                />
            </div>
            {errors.city?.type==='required' && <p className='text-danger'>City is required</p>}

            <button className="btn btn-success">Register</button>
        </form>
      <h2 className='text-center mt-5'>List Of Users</h2>
      <table className="table table-secondary table-striped">
        <thead>
           <tr>
            <th>Username</th>
            <th>Date Of Birth</th>
            <th>City</th>
           </tr>
        </thead>
        <tbody>
            {
                users.map(userObj=> <tr key={userObj.username}>
                    <td>{userObj.username}</td>
                    <td>{userObj.dob}</td>
                    <td>{userObj.city}</td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default AddUser
