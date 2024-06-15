import React from 'react'
import './Footer.css'
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
      <div className="d-flex flex-wrap justify-content-around p-3 footer text-white">
        <div>
        <p>PVPSIT</p>
        <p>Vijayawada</p>
        </div>
        <div>
          <p><FaRegCopyright /> 2024 PVPSIT</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
  )
}

export default Footer
