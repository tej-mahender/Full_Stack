import React from 'react'
import './Products.css'
import Product from '../product/Product'
import { useState } from 'react'
import { useEffect } from 'react'

function Products() {

  let [products,setProducts]=useState([])
  async function getProducts(){
    let res=await fetch('http://localhost:4000/product-api/products')
    let productData=await res.json()
    setProducts(productData.payload)
  }
  useEffect(()=>{
    getProducts()
    },[])

  return (
    <div>
     <div className="row px-5">
      {products.map((productObj)=>(
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={productObj.id}>
          <Product productObj={productObj} />
        </div>
      ))}
     </div>
    </div>
  )
}

export default Products
