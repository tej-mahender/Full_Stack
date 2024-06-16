import './Header.css'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbLogin2 } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import {useContext} from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'

function Header() {

  let {logoutUser,userLoginStatus}=useContext(userLoginContext)

  return (
    <div className='d-flex flex-wrap justify-content-around header'>
      <h1>My Shop</h1>
      <ul className="nav fs-5 p-3">
      
        <li className="nav-item">
         <Link to="" className="nav-link text-white">
         <FaHome className='text-warning me-1' />Home</Link>
        </li>

        {userLoginStatus===false ?(
        <li className="nav-item">
          <Link to="login" className="nav-link text-white">
          <TbLogin2 className='text-warning me-1'/>Login</Link>
        </li>
        ):(
          <li className="nav-item">
          <Link to="login" className="nav-link text-white" onClick={logoutUser}>
          <TbLogin className='text-warning me-1'/>Logout</Link>
        </li>
      )}
        <li className="nav-item">
          <Link to="register" className="nav-link text-white">
          <AiOutlineUserAdd className='text-warning me-1'/>Register</Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link text-white">
          <FaInfoCircle className='text-warning me-1'/>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
