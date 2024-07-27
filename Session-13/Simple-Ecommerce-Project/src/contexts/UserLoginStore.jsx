import {userLoginContext} from  './userLoginContext'
import {useState} from 'react'

function UserLoginStore({children}) {

    let [currentUser,setCurrentUser]=useState(null)
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    let [err,setErr]=useState("")
    async function loginUser(userCred){
      try{
        // let res=await fetch(`https://usersapi-pieg.onrender.com/users?username=${userCred.username}&password=${userCred.password}`)
        let res=await fetch('http://localhost:4000/user-api/login',
          {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(userCred)
          }
        )
        let data=await res.json()
        if(data.message==="login success"){
            setCurrentUser(data.user)
            setUserLoginStatus(true)
            setErr('')
            //store token in session storage
            sessionStorage.setItem('token',data.token)
        }
        else{
          setErr(data.message)
          setCurrentUser({})
          setUserLoginStatus(false)
        }
    }
    catch(error){
      setErr(error.message)
    }
  }
    //user logout
    function logoutUser(){
      setCurrentUser(null)
      setUserLoginStatus(false)
      //remove token
      sessionStorage.removeItem('token')
      }

  return (
    <userLoginContext.Provider value=
    {{userLoginStatus,loginUser,logoutUser,currentUser,setCurrentUser}}>
        {children}
    </userLoginContext.Provider>
  )
}

export default UserLoginStore
