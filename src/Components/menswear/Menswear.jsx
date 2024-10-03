
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState,useEffect } from "react";
import Mensitems from "./mensitems/Mensitems";
import './Menswear.css'


function Menswear(){
    let [item,setItem]=useState([])
    useEffect(()=>{
        requestMens()
    },[])
       
  function requestMens(){
    var promiseObj= axios.get("http://localhost:3000/categories_mensclothing")
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
        <div className="menswear" id="menswear">
            <h3 className="heading">Men's Wear Component</h3>
            <div className="carousel-3"></div>
            <div className="card">
                {item.map((item,index)=>(
                    <Mensitems key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Menswear;