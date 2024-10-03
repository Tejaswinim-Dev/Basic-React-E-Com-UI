import {useParams} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios";
import { useState } from "react";
function Productdetails() {
  let[state,setState]=useState({
    id:0,
    title:"",
    rating:{
      rate:0,
      count:0,
    },
    category:"",
    price:0,
    description:"",
    image:"",
  })
  let {id}=useParams();
  useEffect(
    ()=>{
      axios.get(`http://localhost:3000/products/${id}`).then((res)=>{
        console.log(res.data)
        setState(res.data)
      }).catch((error)=>{
        console.log("Error fetched while loading ",error)
      })
    },[id]
  )

  return (
    
    <div className='container m-3'>
      <div className="row">
        <div className="col-4">
          <img src={state.image} alt="" width="100%" height={450} />
        </div>
        <div className="col-8">
          <dl>
            <dt>Product Name</dt>
            <dd>{state.title}</dd>
            <dt>Price</dt>
            <dd>${state.price}</dd>
            <dt>Category</dt>
            <dd>{state.category}</dd>
            <dt>Description</dt>
            <dd>{state.description}</dd>
            <dt>Rating</dt>
            <dd>{state.rating.rate}</dd>
          </dl>
          <button className="btn btn-primary m-1">Add to Cart</button>
          <button className="btn btn-secondary m-1">Back to Electronics</button>
        </div>
      </div>
     
    </div>
  )
}

export default Productdetails
