
import './Electitems.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';


function Electronicitem({item}){
    let [addCart,setCart]=useState(false)
    const {image,title,price,category,rating,id}=item;
    return(
        
        <div className="electronics-main">
            <div className="electronics-card">
            <img src={image} alt="" />
            <h6>{title}</h6>
            <span><b>Category:</b>{category}</span><br />
            <span><b>Price:</b>${price}</span><br />
            <p><b>Rate:</b>{rating.rate} <b>Count:</b>{rating.count}</p>
            <Link to={`/productdetails/${id}`}>   
                <button className='btn btn-primary m-1 '>Product Details</button>
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

export default Electronicitem;