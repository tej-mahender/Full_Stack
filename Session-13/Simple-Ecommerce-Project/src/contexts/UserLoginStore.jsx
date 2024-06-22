import {userLoginContext} from  './userLoginContext'
import {useState} from 'react'

function UserLoginStore({children}) {

    let [currentUser,setCurrentUser]=useState(null)
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    async function loginUser(userCred){
        // let res=await fetch(`https://usersapi-pieg.onrender.com/users?username=${userCred.username}&password=${userCred.password}`)
        let res=await fetch(`http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`)
        let data=await res.json()
        if(data.length!==0 && data[0].password===userCred.password){
            setCurrentUser(data[0])
            setUserLoginStatus(true)
        }
        else{
          console.log("Invalid Creditianls")
          setCurrentUser(null)
          setUserLoginStatus(false)
        }
    }
    //user logout
    function logoutUser(){
      setCurrentUser(null)
      setUserLoginStatus(false)
      }

  return (
    <userLoginContext.Provider value=
    {{userLoginStatus,loginUser,logoutUser,currentUser,setCurrentUser}}>
        {children}
    </userLoginContext.Provider>
  )
}

export default UserLoginStore
