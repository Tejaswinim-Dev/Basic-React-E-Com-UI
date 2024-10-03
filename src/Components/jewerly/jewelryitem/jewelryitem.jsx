/* eslint-disable react/prop-types */
import { useState } from 'react';
import './jewelryitem.css'
import {Link} from "react-router-dom"



function Jewelryitem({item}){
    let [addCart,setCart]=useState(false)
    let {image,title,category,price,rating,id}=item;
    return(
        
        <div className="jewelry-main">
            <div className="jewelry-card">
            <img src={image} alt="" />
            <h6>{title}</h6>
            <span><b>Category:</b>{category}</span><br />
            <p><b>Price:</b>${price}</p>
            <p><b>Rate:</b>{rating.rate} <b>Count:</b>{rating.count}</p>
            <Link to={`/productdetails/${id}`}>
            <button className='btn btn-primary m-1'>Product Details</button>
            </Link>
            {addCart ? (
          <button className="btn btn-danger mx-1" onClick={()=>setCart(false)}>Remove</button>
        ) : (
          <button className="btn btn-warning mx-1" onClick={()=>setCart(true)}>Add to Cart</button>
        )}
            </div>
        </div>

    )
}

export default Jewelryitem;