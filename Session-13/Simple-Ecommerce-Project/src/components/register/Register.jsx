import React from 'react'
import './Register.css'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Register() {

  //error state
  let [err,setErr]=useState("")

  let {register,handleSubmit,formState:{errors}}=useForm()

  let navigate=useNavigate()

  async function onUserRegister(newUser){
    try{
    console.log(newUser)
    let res=await fetch("https://usersapi-mcsw.onrender.com/users",{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(newUser)
    })
    if(res.status===201){
      navigate('/login')
    }
  }
  catch(err){
    console.log(err)
    setErr(err.message)
  }
 }

  return (
    <div>
      <h1 className='text-center mt-5'>User Registration Form</h1>

       {/* Display error message */}
       {err && <p className="text-danger text-center">{err}</p>}
       
      <div className="row">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          <form className='mx-auto mt-5 bg-light shadow-md p-3' onSubmit={handleSubmit(onUserRegister)}>
            <label htmlFor="" className='form-label'>Username</label>
             <input type="text" {...register('username',{required:true})} className='form-control mb-3' name="username" id="username" />
             {errors.username?.type==='required'&& <p className="text-danger">Username is required</p> }

            <label htmlFor="" className='form-label'>Email</label>
            <input type="email" {...register('email',{required:true})} className='form-control mb-3' name="email" id="email" />
            {errors.email?.type==='required'&& <p className="text-danger">Email is required</p> }

            <label htmlFor="" className='form-label'>Password</label>
            <input type="password" {...register('password',{required:true})} className='form-control mb-3' name="password" id="password" />
            {errors.password?.type==='required'&& <p className="text-danger">Password is required</p> }

            <label htmlFor="" className='form-label'>Mobile</label>
            <input type="tel" {...register('mobile',{required:true})} className='form-control mb-3' name="mobile" id="mobile"/>
            {errors.mobile?.type==='required'&& <p className="text-danger">Mobile is required</p> }

            <label htmlFor="" className='form-label'>Paste Img URL</label>
            <input type="text" {...register('image', { required: true })} className='form-control mb-3' id="url" />
            {errors.image?.type === 'required' && <p className="text-danger">URL is required</p>}

            <button className="btn btn-info d-block mx-auto" type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
