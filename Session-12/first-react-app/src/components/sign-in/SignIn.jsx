import {useForm} from 'react-hook-form'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function SignIn() {
    let{register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    let [userCredErr,setUserCredErr]=useState('')

   async function login(userCred){
    let res=await fetch(
      `http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`)
    let data=await res.json()
    if(data.length===0){
      setUserCredErr('Invalid Credintialas')
    }
   else{
    navigate('/user-dashboard',{state:data[0]})
   }
  }
  return (
    <div>
      <h1 className='mt-5'>SignIN</h1>
      {userCredErr.length!==0&&<p className='fs-2 text-danger text-center'>{userCredErr}</p>}
      <form className="w-50 mx-auto mt-5 bg-light" onSubmit={handleSubmit(login)}>
        <input type="text"
        {...register('username')} className='form-control mb-3' placeholder='username' />
         <input type="password"
        {...register('password')} className='form-control mb-3' placeholder='password'/>
        <button className="btn btn-success">Sign in</button>
      </form>
    </div>
  )
}

export default SignIn
