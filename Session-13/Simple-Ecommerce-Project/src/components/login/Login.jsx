import './Login.css'
import {useForm} from 'react-hook-form'
import { useContext,useState,useEffect } from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'
import {useNavigate} from 'react-router-dom'

function Login() {

    let{register,handleSubmit,formState:{errors}}=useForm()
    
    let {loginUser,userLoginStatus,}=useContext(userLoginContext)

    let navigate=useNavigate()

     const [userLoginErr,setUserLoginErr]=useState('')


   async function onUserLogin(userCred){
   let res=await loginUser(userCred)
   if(!res)
    setUserLoginErr('Invalid username or password')
  }
  useEffect(()=>{
    if(userLoginStatus===true){
      navigate('/user-profile')
    }
    },[userLoginStatus])
  

  return (
    <div>
    <h1 className='text-center mt-5'>Login IN</h1>

    <div className="row">
      <div className="col-11 col-sm-10 col-md-6 mx-auto">

        {userLoginStatus===false &&userLoginErr.length!==0 &&(
          <p className="fs-2 text-danger text-center">{userLoginErr}</p>
        )}

        <form className='mx-auto mt-5 bg-light shadow-md p-3'
              onSubmit={handleSubmit(onUserLogin)}>

          <label htmlFor="" className='form-label'>
            Username
          </label>
           <input 
              type="text" 
              className='form-control mb-3' 
              id="username"
              {...register('username',{required:true})} 
            />
           {errors.username?.type==='required'&& 
              <p className="text-danger">Username is required</p> 
           }

          <label htmlFor="" className='form-label'>
            Password
          </label>
          <input 
            type="password" 
            className='form-control mb-3' 
            d="password" 
            {...register('password',{required:true})} 
            />
          {errors.password?.type==='required'&& 
            <p className="text-danger">Password is required</p> 
          }

          <button className="btn btn-info" type='submit'>
              Login
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login