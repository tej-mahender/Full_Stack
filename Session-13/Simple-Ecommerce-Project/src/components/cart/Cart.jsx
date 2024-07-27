import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { userLoginContext } from '../../contexts/userLoginContext';

function Cart() {
  const { currentUser } = useContext(userLoginContext);
  let [cart,setCart]=useState([])

  //get latest cart
  async function getUserCart(){
    let res=await fetch(`http://localhost:4000/user-api/cart/${currentUser.username}`)
    let data=await res.json()
    // console.log(data)
    setCart(data.payload.products)
  }
  useEffect(()=>{
    getUserCart()
  },[])

  async function deleteItem(productid){
    let res=await fetch(`http://localhost:4000/user-api/remove-from-cart/${currentUser.username}/${productid}`, {
        method:"DELETE",
      })
      let data=await res.json()
      // console.log(data)
        // console.log(res);
        if (data.message === "Product deleted from cart") {
          getUserCart();
        }
  }

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <div className="cart-container row">
          {cart.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card text-center h-100 mb-3" key={item.id}>
              <div className="card-body d-flex flex-column justify-content-between">
              <img src={item.thumbnail} alt="" />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: ${item.price}</p>
                <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>Delete</button>
                </div>
              </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
