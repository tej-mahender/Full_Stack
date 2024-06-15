import React from 'react'
import { useLocation } from 'react-router-dom'

function UserDashboard() {

  let {state}=useLocation()

  return (
    <div className='text-center'>
      <h2>User Dashboard</h2>
      <div className="mt-5">
        <p>Username: {state.username}</p>
        <p>Email: {state.email}</p>
      </div>
      
    </div>
  )
}

export default UserDashboard
