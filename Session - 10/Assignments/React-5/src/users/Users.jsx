import React, { useEffect, useState } from 'react'
import UserCount from '../user-count/UserCount'
function Users() {

    let [count,setCount]=useState(0)
    let [user,setUser]=useState([])
    function Add(){
        setCount(count+1)
    }
    async function getUsers(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        setUser(data)
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <div>
        <div className="mt-5 text-center">
      <h2>User Count - {count}</h2>
      
      </div>
      <div className="row px-5">
        {user.map((user)=>(
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={user.id}>
            <div className="card h-100">
                <div className="card-body">
                <h5 className="card-title">Name: {user.name}</h5>
                <p><b>Username: </b>{user.username}</p>
                <p><b>City:</b> {user.address.city}</p>
                <p><b>Phone:</b> {user.phone}</p>
                </div>
                <div className="card-footer text-center">
                <UserCount count={{count,Add}}/>
                </div>
            </div>
        </div>
       ) )}
      </div>
    </div>
  )
}

export default Users
