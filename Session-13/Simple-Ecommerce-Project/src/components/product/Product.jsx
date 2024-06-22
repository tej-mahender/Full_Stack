import React from 'react'
import './Product.css'
import { useContext } from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'

function Product(props) {

  let productObj=props.productObj
  let {currentUser}=useContext(userLoginContext)

  async function addToCart(productObj){
    productObj.username=currentUser.username
    let res=await fetch('http://localhost:3000/user-cart',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(productObj)
    })
    if(res.status===201){
        console.log("added to cart")
    }
  }
  return (
      <div className="card text-center h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="fs-4 text-secondary">{productObj.title}</p>
          <p className="card-text ">{productObj.description}</p>
          <p className="card-text">Price: ${productObj.price}</p>
          <button className="btn btn-primary" onClick={()=>addToCart(productObj)}>Add to Cart</button>
        </div>
      </div>
  )
}

export default Product
