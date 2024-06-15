import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Tech() {
  return (
    <div>
      {/* navbar with links */}
      <ul className='nav justify-content-center mt-5 display-3'>
                <li className='nav-item'>
                    <Link to="java" className='nav-link text-info'>Java</Link>
                 </li>
                 <li className='nav-item'>
                    <Link to="node" className='nav-link text-info'>Node</Link>
                 </li>
                 <li className='nav-item'>
                    <Link to="vue" className='nav-link text-info'>Vue</Link>
                 </li>
            </ul>
            {/* place holder to display children of tech component */}
            <Outlet/>
    </div>
  )
}

export default Tech
