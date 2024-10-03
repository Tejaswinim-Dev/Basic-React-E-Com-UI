import './Electronics.css'
import axios from "axios"
import Electronicitem from './electronicsitem/Elecitems.jsx'
import { useState,useEffect } from 'react'

function Electronics(){
    const [user,setuser]=useState([])
    useEffect(()=>{
      requestElectronics()
  },[])
    
    function requestElectronics(){
      var promiseObj= axios.get("http://localhost:3000/categories_electronics")
      promiseObj.then((user)=>{
        console.log("then")
        console.log(user.data)
        setuser(user.data)
      }).catch((error)=>{
        console.log("catch")
        console.log(error)
      })
    }
    return(
        <div className='electronics' id='electronics'>
            <h2 className='heading'>Electronic Components</h2>
            <div className='carousel-1'></div>
            <div className='card'>
               {
                user.map((item,index)=>(
                    <Electronicitem key={index} item={item}/>
                ))
               } 
            </div>
        </div>
    )
}
export default Electronics;