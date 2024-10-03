import axios from "axios"
import { useState,useEffect } from "react"
import Jewelryitem from "./jewelryitem/Jewelryitem"
import './Jewelry.css'


function Jewelry(){
    let [item,setState]=useState([])
    useEffect(()=>{
        requestJewelry()
    },[])
    function requestJewelry(){
       var promiseObj= axios.get("http://localhost:3000/categories_jewelery")
       promiseObj.then((user)=>{
        console.log("then")
        console.log(user.data)
        setState(user.data)
       }).catch((error)=>{
        console.log("catch")
        console.log(error)
       })
    }
    return(
        <div className="jewelry" id="jewelry">
            <h3 className="heading">Jewelry Component</h3>
           <div className="carousel-2"></div>
            <div className="card">
                {
                    item.map((items,index)=>(
                        <Jewelryitem key={index} item={items}  />
                    ))
                }
            </div>
        </div>
        
    )
}
export default Jewelry;