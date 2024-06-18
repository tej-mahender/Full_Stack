import {userLoginContext} from  './userLoginContext'
import {useState} from 'react'

function UserLoginStore({children}) {

    let [currentUser,setCurrentUser]=useState(null)
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    async function loginUser(userCred){
        let res=await fetch(`https://usersapi-mcsw.onrender.com/users?username=${userCred.username}&password=${userCred.password}`)
        let data=await res.json()
        if(data.length!==0 &&data[0].username===userCred.username && data[0].password===userCred.password){
            setCurrentUser(data[0])
            setUserLoginStatus(true)
            return true;
        }
        else{
          console.log("Invalid Creditianls")
          setCurrentUser(null)
          setUserLoginStatus(false)
          return false;
        }
    }

    //user logout
    function logoutUser(){
      setCurrentUser(null)
      setUserLoginStatus(false)
      }

  return (
    <userLoginContext.Provider value={{userLoginStatus,loginUser,logoutUser}}>
        {children}
    </userLoginContext.Provider>
  )
}

export default UserLoginStore
