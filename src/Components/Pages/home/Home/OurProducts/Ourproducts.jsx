import './Ourproducts.css'
import { useState } from 'react';


function Ourproducts(){
    let[details]=useState([
        {image:"https://rukminim2.flixcart.com/fk-p-flap/200/200/image/345cef25f4179b5c.jpg?q=70",name:"Fashion"},
        {image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9VhNyvmm16Fdocy7nrnO_yTZK2eWISWUr_AJuEMV7M5iTELDvruNunG9lPEmW1EJ1BG6JE9I35h9_sPRDwolLxQy8hu7k51zYVDj6Xk4&usqp=CAE",name:"T-shirts"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/shoe/t/w/v/4-397675-4-puma-alpine-snow-caramel-latte-frosted-dew-original-imah3wu66jzgt8ar.jpeg?q=70&amp;crop=false",name:"Sports Wear"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/computer/2/l/a/-original-imahyhfcsdtjzzjz.jpeg?q=70&amp;crop=false",name:"Laptop & Accesories"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/headphone/v/f/m/-original-imagz5z4cknamu9d.jpeg?q=70&amp;crop=false",name:"Speakers & Bluetooth"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/stuffed-toy/s/2/o/adorable-strawberry-rabbit-plushie-cute-bunny-soft-toy-35-rss-original-imahf7vvm3gazrzz.jpeg?q=70&amp;crop=false",name:"Soft Toys"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/smartwatch/i/0/v/-original-imagrmhwbgw3bdtz.jpeg?q=70&amp;crop=false",name:"Smart Watches"},
        {image:"https://rukminim2.flixcart.com/image/128/128/xif0q/dumbbell/x/x/p/10-kg-pvc-adjustable-dumbbell-set-combo-aptitude-original-imagvhwzuzcj2uye.jpeg?q=70&amp;crop=false",name:"Gym Essentails"},
    ])
   
    return(
        
        <div >
            <h4>Our Products</h4>
            <div className='cards-main'>
            {
                details.map((detail,index)=>(
                    <div className='cards' key={index}>
                <img src={detail.image} alt="" />
                <h6>{detail.name}</h6>
            </div>
                ))
            }
            </div>
        </div>
        
    )
}
export default Ourproducts;