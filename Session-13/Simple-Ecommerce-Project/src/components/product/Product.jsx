import React from 'react'
import './Product.css'
import { useContext } from 'react'
import {userLoginContext} from '../../contexts/userLoginContext'
import {useNavigate} from 'react-router-dom'

function Product(props) {

  let productObj=props.productObj
  let {currentUser}=useContext(userLoginContext)
  let navigate=useNavigate()

  async function addToCart(productObj){
    let username=currentUser.username
    let res=await fetch(`http://localhost:4000/user-api/add-to-cart/${username}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(productObj)
    })
    let result=await res.json();
    console.log(result);
    if(result.payload.modifiedCount=1){
      navigate('/user-profile/cart')
    }
  }
  return (
      <div className="card text-center h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <img src={productObj.thumbnail} alt="" />
          <p className="fs-4 text-secondary">{productObj.title}</p>
          <p className="card-text ">{productObj.description}</p>
          <p className="card-text">Price: ${productObj.price}</p>
          <button className="btn btn-primary" onClick={()=>addToCart(productObj)}>Add to Cart</button>
        </div>
      </div>
  )
}

export default Product
