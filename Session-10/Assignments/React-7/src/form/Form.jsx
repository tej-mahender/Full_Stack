import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
function Form() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let [users,setData]=useState([])

    function handleForm(data){
        setData(data)
        console.log(data)
    }

  return (
    <div className='container mx-auto border shadow-lg bg-light mt-5 p-5' style={{width:'80%'}}> 
      <h1 className='mb-5'>Registration Form</h1>
      <div className="row">
        <form onSubmit={handleSubmit(handleForm)}>
            <div className="row">
                <div className="col">
                    <label className='form-label'>First Name</label>
                    <input type="text" name='firstname' className='form-control' {...register('firstname',{required:true,minLength:4,maxLength:6})}/>
                    {errors.firstname?.type==='required' && <p className='text-danger'>Firstname is required</p>}
                    {errors.firstname?.type==='minLength'&& <p className="text-danger">Firstname should be of 4 characters</p> }
                    {errors.firstname?.type==='maxLength'&& <p className="text-danger">Firstname should be of less than 6 characters</p> }
                </div>
                <div className="col">
                <label className='form-label'>Last Name</label>
                    <input type="text" name='lastname' className='form-control' {...register('lastname',{required:true,minLength:4,maxLength:6})}/>
                    {errors.lastname?.type==='required' && <p className='text-danger'>Lastname is required</p>}
                    {errors.lastname?.type==='minLength'&& <p className="text-danger">Lastname should be of 4 characters</p> }
                    {errors.lastname?.type==='maxLength'&& <p className="text-danger">Lastname should be of less than 6 characters</p> }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className='form-label mt-3'>Birthday</label>
                    <input type="date" className="form-control" name='birthday' {...register('birthday',{requied:true})} />
                    {errors.birthday?.type==='required' && <p className='text-danger'>Birthday is required</p>}
                </div>
                <div className="col">
                    <label htmlFor="" className="form-label mt-4">Gender</label>
                    <div className="row">
                    <div className="form-check col">
                        <input type="radio" className="form-check-input" name='gender' id='male' {...register('gender',{required:true})} />
                        <label htmlFor="male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check col">
                        <input type="radio" className="form-check-input" name='gender' id='female' {...register('gender',{required:true})} />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                    </div>
                    {errors.gender?.type==='required' && <p className='text-danger'>Gender is required</p>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="form-label mt-3">Email</label>
                    <input type="email" className="form-control" name='email' {...register('email',{required:true})}/>
                    {errors.email?.type==='required' && <p className='text-danger'>Email is required </p> } 
                </div>
                <div className="col">
                    <label htmlFor="" className="form-label mt-3">Phone Number</label>
                    <input type="phone" className="form-control" name='phone' {...register('phone',{required:true,minLength:10,maxLength:10})}/>
                    {errors.phone?.type==='required' && <p className='text-danger'>Number is required</p>}
                    {errors.phone?.type==='minLength'&& <p className="text-danger">Number should be of 10 characters</p> }
                    {errors.phone?.type==='maxLength'&& <p className="text-danger">Number should be of 10 characters</p> }
                </div>
            </div>
            <label htmlFor="" className="form-label mt-3">Subject </label>
            <select name="subject" id="" className='form-select'>
                <option selected>Choose Option</option>
                <option value="math">Mathematics</option>
                <option value="chem"> Chemistry</option>
                <option value="phy">Physics</option>
            </select>
            <button className="btn btn-success mt-3 text-center">Register</button>
        </form>
        
      </div>
    </div>
  )
}

export default Form
