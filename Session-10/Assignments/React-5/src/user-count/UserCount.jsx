import React from 'react'

function UserCount(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.count.Add}>Add User</button>
    </div>
  )
}

export default UserCount
