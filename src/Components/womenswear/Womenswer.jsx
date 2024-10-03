/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState,useEffect } from "react";
import Womensitems from "./womenitems/womenitems";
import './Womenswear.css'


function Womenswear(){
    let [item,setItem]=useState([])
    useEffect(()=>{
        requestWomens()
    },[])

  function requestWomens(){
    var promiseObj= axios.get("http://localhost:3000/categories_womensclothing")
    promiseObj.then((user)=>{
     console.log("then")
     console.log(user.data)
     setItem(user.data)
    }).catch((error)=>{
     console.log("catch")
     console.log(error)
    })
  }
    return(
        <div className="womenswear" id="womenswear">
            <h3 className="heading">Women's Wear Component</h3>
            <div className="carousel-4"></div>
            <div className="card">
                {item.map((item,index)=>(
                    <Womensitems key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Womenswear;