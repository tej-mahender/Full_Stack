import React from 'react'
import {userContext} from './userContext'

import {useState,useEffect} from 'react'

function UserStore({children}) {
    let [users,setUsers]=useState([])

    async function getUsers(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        setUsers(data)
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
   <userContext.Provider value={{users,setUsers}}>
    {children}
   </userContext.Provider>
  )
}

export default UserStore
