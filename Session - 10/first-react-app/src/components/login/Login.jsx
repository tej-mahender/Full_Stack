import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom";


function Login(){

    let {register,handleSubmit,formState:{errors}} = useForm()
    let navigate = useNavigate();

    //form submission
   async  function handleFormSubmission(userObj){
         console.log(userObj)
         //make HTTP POST req to create new user API
         let res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userObj)
          });

          //if user created successfully
          if(res.status===201)
            //navigate to home page
            navigate('/registeredusers')
    }

    return(
        <div className="container">
            <h1>Login Form</h1>

            <form className="w-50 m-auto" onSubmit={handleSubmit(handleFormSubmission)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" 
                    {...register('username',{required:true,minLength:4})}
                     name="username" 
                     id="username" 
                     className="form-control"
                     />
                </div>
                {/* valiidation error message */}
                {   errors.username?.type==='minLength'&& <p className="text-danger">Username should be of 4 characters</p> }
                {   errors.username?.type==='required'&& <p className="text-danger">Username is required</p> }


                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" {...register('email')} name="email" id="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" {...register('password')} name="password" id="password" className="form-control"/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
export default Login;