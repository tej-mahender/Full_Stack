import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { userLoginContext } from '../../contexts/userLoginContext';

function Cart() {
  const { currentUser } = useContext(userLoginContext);
  const [cartItems, setCartItems] = useState([]);

  async function getCart() {
      let res = await fetch(`http://localhost:3000/user-cart?username=${currentUser.username}`);
      let data = await res.json();
      setCartItems(data);
    } 

  async function deleteItem(productid){
    console.log("deleting",productid)
    let res=await fetch(`http://localhost:3000/user-cart/${productid}`, {
        method:"DELETE",
      })
        console.log(res);
      getCart();
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <div className="cart-container row">
          {cartItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card text-center h-100 mb-3" key={item.id}>
              <div className="card-body d-flex flex-column justify-content-between">
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
