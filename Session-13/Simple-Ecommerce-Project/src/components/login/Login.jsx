import './Login.css'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'

function Login() {
    let{register,handleSubmit,formState:{errors}}=useForm()
    
    let {setUserLoginStatus,loginUser}=useContext(userLoginContext)
    const [userLoginErr,setUserLoginErr]=useState('')


   async function onUserLogin(userCred){
   loginUser(userCred)
  }
  return (
    <div>
    <h1 className='text-center mt-5'>Login IN</h1>

    <div className="row">
      <div className="col-11 col-sm-10 col-md-6 mx-auto">

        {setUserLoginStatus===false &&userLoginErr.length!==0 &&(
          <p className="fs-2 text-danger text-center">{err}</p>
        )}
        <form className='mx-auto mt-5 bg-light shadow-md p-3' onSubmit={handleSubmit(onUserLogin)}>
          <label htmlFor="" className='form-label'>
            Username
          </label>
           <input 
              type="text" 
              {...register('username',{required:true})} 
              className='form-control mb-3' 
              id="username" 
            />
           {errors.username?.type==='required'&& <p className="text-danger">Username is required</p> }

          <label htmlFor="" className='form-label'>Password</label>
          <input type="password" {...register('password',{required:true})} className='form-control mb-3' name="password" id="password" />
          {errors.password?.type==='required'&& <p className="text-danger">Password is required</p> }

          <button className="btn btn-info" type='submit'>Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login