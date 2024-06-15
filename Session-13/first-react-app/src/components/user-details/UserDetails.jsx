import React from 'react'
import { useLocation } from 'react-router-dom'

function UserDetails() {

    let{state}=useLocation()
  return (
    <div>
      <h1>User Details</h1>
      <div className="card w-50 mx-auto mt-5 shadow-lg ">
        <div className="card-body">
            <h3>{state.user.name}</h3>
            <p><b>Email: </b>{state.user.email}</p>
            <p><b>Phone: </b>{state.user.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
