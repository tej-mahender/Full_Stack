import React from 'react'
import './UserProfile.css'
import { useContext } from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import { AiOutlineProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Navigate } from 'react-router-dom'

function UserProfile() {
  let {currentUser}=useContext(userLoginContext)
  let navigate=useNavigate();

  function EditUser(){
    navigate('../edit')
  }

  return (
    <div>
      <div className="profile text-end p-3">
        <h1>{currentUser.username}</h1>
        <p>{currentUser.email}
        <FaUserEdit className='text-warning fs-2' onClick={EditUser}/>
        </p>
      </div>

      <div>
      <ul className="nav fs-5 p-3 justify-content-around my-2">
      <li className="nav-item">
       <Link to="products" className="nav-link text-info">
       <AiOutlineProduct className='text-warning me-1' />Products</Link>
      </li>
      <li className="nav-item">
       <Link to="cart" className="nav-link text-info">
       <FaShoppingCart className='text-warning me-1' />Cart</Link>
      </li>
      </ul>
      </div>
      {/* place holder */}
        <Outlet/>
    </div>
  )
}

export default UserProfile
