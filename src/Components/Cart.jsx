/* eslint-disable react/jsx-key */
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Cart() {
  let[state,setState]=useState([])
  useEffect(()=>{
    getCartProducts()

  },[])


  const getCartProducts=()=>{
    axios.get("http://localhost:3000/addToCart").then((res)=>{
      setState(res.data)
    }).catch(()=>{
      alert("Failed to fetch cart details")
    })
  }

  const removeFromCart=(id)=>{
    axios.delete(`http://localhost:3000/addToCart/${id}`).then(()=>{
      alert("Removed product from Cart")
      getCartProducts()
    }).catch(()=>{
      alert("Failed to remove product from cart")
    })
  }

  return (
    <div className='container'>
      <div className="row text-center">
        <h5 className='text-sucess h2 m-2'>Cart Information</h5>
        {
          state.length>0 ?(
          state.map((item)=>{
            return <div className='row m-4 shadow d-flex justify-content-evenly align-content-center'>
              <div className="col-2 p-2" >
                <img src={item.image} width="120px" height="100px" alt="" />
              </div>
              <div className="col-2">
                <h6>{item.title}</h6>
              </div>
              <div className="col-2">${
                item.price
                }</div>
              <div className="col-2">{
                item.category
          }</div>
              <div className="col-2">
                <button className='btn btn btn-danger' onClick={()=>{
                  removeFromCart(item.id)
                }}>Remove</button>
              </div>
            </div>
          })
          ):(
            <h3>No Products added in the cart</h3>
          )
        }
      </div>
     
      
    </div>
  )
}

export default Cart
