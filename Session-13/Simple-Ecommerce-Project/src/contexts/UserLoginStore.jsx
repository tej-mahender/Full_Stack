import {userLoginContext} from  './userLoginContext'
import {useState} from 'react'
import React from 'react'

function UserLoginStore({children}) {

    let [currentUser,setCurrentUser]=useState({})
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    async function loginUser(userCred){
        let res=await fetch(`htpp://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`)
        let data=await res.json()
        if(data.length!==0){
            setCurrentUser(data[0])
            setUserLoginStatus(true)
        }
        else{
          console.log("Invalid Creditianls")
          setCurrentUser({})
          setUserLoginStatus(false)
        }
    }
  return (
    <userLoginContext.Provider vlaue={{setUserLoginStatus,loginUser}}>
        {children}
    </userLoginContext.Provider>
  )
}

export default UserLoginStore
